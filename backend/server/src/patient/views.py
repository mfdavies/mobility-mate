from flask import request, jsonify, Blueprint
from firebase_admin import firestore

from firebase_admin import firestore
import tempfile
import os

patient_blueprint = Blueprint("patient", __name__)
db = firestore.client()
users_ref = db.collection("practitioners")

session = {}
# Gets all exercises for a patient
@patient_blueprint.route('/all_exercises', methods=['GET'])
def all_exercises():
    try:
        practitioner = request.args.get("practitioner")
        patient = request.args.get("patient")
        exercises = users_ref.document(practitioner).collection("patients").document(patient).get().to_dict()["exercises"]
        
        return jsonify({"exercises": exercises}), 200
    except Exception as e:
            return jsonify({"error": str(e)}), 400

# Gets a spefic exercise for a patient
@patient_blueprint.route('/exercise', methods=['GET'])
def exercise():
    try:
        practitioner = request.args.get("practitioner")
        exercise_id = request.args.get("exercise")
        exercise_data = users_ref.document(practitioner).collection("exercises").document(exercise_id).get().to_dict()
        return jsonify({"exercise": exercise_data}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400
