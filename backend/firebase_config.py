import firebase_admin
from firebase_admin import credentials

# Initialize Firebase app
def initialize_firebase():
    cred = credentials.Certificate('service.json')
    firebase_admin.initialize_app(cred)
