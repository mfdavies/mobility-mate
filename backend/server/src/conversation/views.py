from flask import request, jsonify, session, Blueprint
from firebase_admin import firestore
from .conversation import Conversation  # Assuming your Conversation class is defined in 'conversation.py'
from firebase_admin import firestore

conversation_blueprint = Blueprint('conversation', __name__)
db = firestore.client()
users_ref = db.collection('practitioners')
@conversation_blueprint.route('/send_message', methods=['POST'])
def send_message():
    practitioner = request.args.get('practitioner')
    patient = request.args.get('patient')
    user_doc_ref = users_ref.document(practitioner).collection("patients").document(patient)
    if 'conversation_id' not in session:
        conversation = Conversation(user_doc_ref=user_doc_ref)
        session['conversation_id'] = conversation.get_conversation_id()
    else:
        conversation_id = session['conversation_id']
        conversation = Conversation(user_doc_ref=user_doc_ref, conversaton_id=conversation_id)
    # TODO: transcribe if it is audio
    message = request.json.get('message')
    
    # Generate a reply using the Conversation object
    reply = conversation.generate_reply(message)
    return jsonify({'reply': reply}), 200

@conversation_blueprint.route('/end_conversation', methods=['POST'])
def end_conversation():
    if 'conversation_id' not in session:
        return jsonify({'reply': 'No Conversation to end'}), 200
    conversation_id = session.pop('conversation_id')
    practitioner = request.args.get('practitioner')
    patient = request.args.get('patient')

    user_doc_ref = users_ref.document(practitioner).collection("patients").document(patient)

    # Retrieve the Conversation object based on the conversation ID
    conversation = Conversation(user_doc_ref, conversaton_id=conversation_id)
    summary = conversation.end_conversation()
    return jsonify({'reply': summary}), 200