import whisper
import datetime
import os
from openai import OpenAI

client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
model = whisper.load_model("base")
class Conversation:
    prompt = "You are a physiotherapist. You will now be connected to a patient (the user). You are to ask them about these following exercises one at a time to see hwo they are progressing."
    
    def __init__(self, user_doc_ref, conversaton_id = None):
        if conversaton_id:
            self.conversation_ref = user_doc_ref.collection('conversations').document(conversaton_id)
            self.history = self.conversation_ref.get().get("history")
        else:
            self.history = []
            _, self.conversation_ref = user_doc_ref.collection('conversations').add({
                "date": datetime.datetime.now(),
                "history": self.history})
    
    def get_conversation_id(self):
        return self.conversation_ref.id


    @staticmethod
    def transcribe(audio_file):
        return model.transcribe(audio_file, fp16=False).get("text")
    
    def request_reply(self):
        return client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages= self.history,
            temperature=0.5
        )
    
    def generate_reply(self, text):
        self.history.append({"role": "user", "content": text})
        self.conversation_ref.update({"history": self.history})
        response = self.request_reply()
        self.history.append({"role": "assistant", "content": response.choices[0].message.content.strip()})
        self.conversation_ref.update({"history": self.history})
        return response.choices[0].message.content.strip()
    
    
    def generate_greeting(self):
        self.history.append({"role": "system", "content": self.prompt})
        response = self.request_reply()
        self.history.append({"role": "assistant", "content": response.choices[0].message.content.strip()})
        self.conversation_ref.update({"history": self.history})
        return response.choices[0].message.content.strip()
    
    def end_conversation(self):
        print(self.history)
        self.history.append({"role": "system", "content": "Summarize the entire conversation between the user and the assistant for a physiotherapist focus on the answers the user game. Give me only the summary, no other text."})
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages= self.history,
            temperature=0.5
        )
        self.summary = response.choices[0].message.content.strip()
        
        # Add the summary to the conversation collection
        self.conversation_ref.update({"summary": self.summary})
        
        return self.summary
    
    
