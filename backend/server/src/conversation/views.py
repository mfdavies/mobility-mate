from flask import request, jsonify, Blueprint
from firebase_admin import firestore
from .conversation import (
    Conversation,
)
from firebase_admin import firestore
import tempfile
import os

conversation_blueprint = Blueprint("conversation", __name__)
db = firestore.client()
users_ref = db.collection("practitioners")

session = {}


@conversation_blueprint.route("/start")
def start():
    practitioner = request.args.get("practitioner")
    patient = request.args.get("patient")
    user_doc_ref = (
        users_ref.document(practitioner).collection("patients").document(patient)
    )

    conversation = Conversation(user_doc_ref=user_doc_ref)
    greeting = conversation.generate_greeting()
    session["conversation_id"] = conversation.get_conversation_id()

    return jsonify({"reply": greeting}), 200


@conversation_blueprint.route("/send_message", methods=["POST"])
def send_message():
    practitioner = request.args.get("practitioner")
    patient = request.args.get("patient")
    user_doc_ref = (
        users_ref.document(practitioner).collection("patients").document(patient)
    )
    if "conversation_id" not in session:
        return jsonify({"reply": "Please start a conversation first"}), 400

    conversation_id = session["conversation_id"]
    conversation = Conversation(
        user_doc_ref=user_doc_ref, conversaton_id=conversation_id
    )

    # Store audio in a temp file
    audio = request.files["audioFile"]
    temp_audio_path = os.path.join(tempfile.gettempdir(), "received_audio.wav")
    audio.save(temp_audio_path)

    # Transcribe the audio
    message = Conversation.transcribe(str(temp_audio_path))
    os.remove(temp_audio_path)

    # Generate a reply using the Conversation object
    reply = conversation.generate_reply(message)
    return jsonify({"reply": reply}), 200
