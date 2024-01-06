from flask import Flask, request, jsonify, session, Blueprint
from firebase_admin import firestore
from .conversation import Conversation  # Assuming your Conversation class is defined in 'conversation.py'
from firebase_admin import firestore


conversation_blueprint = Blueprint('conversation', __name__)

db = firestore.client()
users_ref = db.collection('practitioners')

@conversation_blueprint.route('/start', methods=['POST'])
def start_conversation():
    # Create a new user document in Firestore (or retrieve an existing one)
    practitioner = request.args.get('practitioner')
    patient = request.args.get('patient')

    user_doc_ref = users_ref.document(practitioner).collection("patients").document(patient)  
    # Create a new user document (you can use a specific user ID if available)

    # Store the conversation reference in the session
    
    conversation = Conversation(user_doc_ref=user_doc_ref)
    session['conversation_id'] = conversation.get_conversation_id()
    return jsonify({'conversation_id': session['conversation_id']}), 200

@conversation_blueprint.route('/send_message', methods=['POST'])
def send_message():
    if 'conversation_id' not in session:
        return jsonify({'error': 'No active conversation'}), 400
    practitioner = request.args.get('practitioner')
    patient = request.args.get('patient')

    user_doc_ref = users_ref.document(practitioner).collection("patients").document(patient)

    conversation_id = session['conversation_id']

    # Retrieve the Conversation object based on the conversation ID
    conversation = Conversation(user_doc_ref, conversaton_id=conversation_id)

    # TODO: transcribe if it is audio
    message = request.json.get('message')
    
    # Generate a reply using the Conversation object
    reply = conversation.generate_reply(message)

    return jsonify({'reply': reply}), 200