from flask import Flask, request, jsonify, session
from google.cloud import firestore
from conversation import Conversation  # Assuming your Conversation class is defined in 'conversation.py'


app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Change this to your secret key

db = firestore.Client()
users_ref = db.collection('users')

@app.route('/start_conversation', methods=['POST'])
def start_conversation():
    # Create a new user document in Firestore (or retrieve an existing one)
    user_doc_ref = users_ref.document()  # Create a new user document (you can use a specific user ID if available)

    # Store the conversation reference in the session
    session['conversation_id'] = Conversation(user_doc_ref)

    return jsonify({'conversation_id': session['conversation_id']}), 200

@app.route('/send_message', methods=['POST'])
def send_message():
    if 'conversation_id' not in session:
        return jsonify({'error': 'No active conversation'}), 400

    conversation_id = session['conversation_id']

    # Retrieve the Conversation object based on the conversation ID
    conversation = Conversation(conversaton_id=conversation_id)

    # TODO: transcribe if it is audio
    message = request.json.get('message')
    
    # Generate a reply using the Conversation object
    reply = conversation.generate_reply(message)

    return jsonify({'reply': reply}), 200