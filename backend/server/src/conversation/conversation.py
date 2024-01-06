import whisper
import datetime
import os
from openai import OpenAI

client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
model = whisper.load_model("base")
prompt = "You are a ..."
class Conversation:
    def __init__(self, user_doc_ref, conversaton_id = None):
        if conversaton_id:
            self.conversation_ref = user_doc_ref.collection('conversations').document(conversaton_id)
            self.history = self.conversation_ref.get().get("history")
        else:
            self.history = [{"role": "system", "content": prompt}]
            _, self.conversation_ref = user_doc_ref.collection('conversations').add({
                "date": datetime.datetime.now(),
                "history": self.history})
    
    def get_conversation_id(self):
        return self.conversation_ref.id

    @staticmethod
    def transcribe(audio_file):
        return model.transcribe(audio_file, fp16=False).get("text")
    
    def generate_reply(self, text):
        self.history.append({"role": "user", "content": text})
        self.conversation_ref.update({"history": self.history})
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages= self.history,
            temperature=0.5
        )
        self.history.append({"role": "assistant", "content": response.choices[0].message.content.strip()})
        self.conversation_ref.update({"history": self.history})
        return response.choices[0].message.content.strip()