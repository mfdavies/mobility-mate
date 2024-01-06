import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account.
def initialize_app():
    cred = credentials.Certificate('service.json')
    
    firebase_admin.initialize_app(cred)
