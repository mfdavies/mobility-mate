import whisper
import datetime
import os
from extensions import socketio
from openai import OpenAI
from io import BytesIO
from pathlib import Path

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
model = whisper.load_model("base")


class Conversation:
    prompt = "You are a physiotherapist. You will now be connected to a patient (the user). You are to ask them about these following exercises one at a time to see how they are progressing. Please maintain a professional tone and keep your questions succint. Your goal is to quickly acquire all the required information from the patient. Use your professional knowledge to help inform your questions relative to each exercise. Here are the exercises:"

    def __init__(self, user_doc_ref, conversaton_id=None):
        if conversaton_id:
            self.conversation_ref = user_doc_ref.collection("conversations").document(
                conversaton_id
            )
            self.history = self.conversation_ref.get().get("history")
        else:
            self.history = []
            _, self.conversation_ref = user_doc_ref.collection("conversations").add(
                {"date": datetime.datetime.now(), "history": self.history}
            )
            self.engineer_prompt(user_doc_ref)

    def get_conversation_id(self):
        return self.conversation_ref.id

    @staticmethod
    def transcribe(audio_file):
        return model.transcribe(audio_file, fp16=False).get("text")

    def request_reply(self):
        return client.chat.completions.create(
            model="gpt-3.5-turbo", messages=self.history, temperature=0.5
        )

    def generate_reply(self, text):
        self.history.append({"role": "user", "content": text})
        self.conversation_ref.update({"history": self.history})
        text_response = self.request_reply()

        # Generate the speech file
        speech_file_path = Path(__file__).parent / "speech.mp3"
        audio_response = client.audio.speech.create(
            model="tts-1",
            voice="alloy",
            input=text_response.choices[0].message.content.strip()
        )
        audio_response.stream_to_file(speech_file_path)

        # Read and stream the file in chunks
        with open(speech_file_path, 'rb') as audio_file:
            while True:
                chunk = audio_file.read(1024)  # Read in chunks of 1KB
                if not chunk:
                    break
                socketio.emit('audio_chunk', {'data': chunk})

        # Clean up the temporary file if needed

        self.history.append(
            {
                "role": "assistant",
                "content": text_response.choices[0].message.content.strip(),
            }
        )
        self.conversation_ref.update({"history": self.history})
        return text_response.choices[0].message.content.strip()

    def generate_greeting(self):
        self.history.append({"role": "system", "content": self.prompt})
        response = self.request_reply()
        self.history.append(
            {
                "role": "assistant",
                "content": response.choices[0].message.content.strip(),
            }
        )
        self.conversation_ref.update({"history": self.history})
        return response.choices[0].message.content.strip()

    def engineer_prompt(self, user_doc_ref):
        exercises = user_doc_ref.get().get("exercises")
        if exercises:
            for exercise in exercises:
                self.prompt += "\n" + exercise

        self.prompt += f". When necessary, please refer the patient to contact their physiotherapist who's name is: {user_doc_ref.parent.parent.get().get('name')}."

    def end_conversation(self):
        print(self.history)
        self.history.append(
            {
                "role": "system",
                "content": "Summarize the entire conversation between the user and the assistant for a physiotherapist focus on the answers the user game. Give me only the summary, no other text.",
            }
        )
        response = client.chat.completions.create(
            model="gpt-3.5-turbo", messages=self.history, temperature=0.5
        )
        self.summary = response.choices[0].message.content.strip()

        # Add the summary to the conversation collection
        self.conversation_ref.update({"summary": self.summary})

        return self.summary
