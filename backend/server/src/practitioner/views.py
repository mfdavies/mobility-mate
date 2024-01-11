from flask import request, jsonify, Blueprint
from firebase_admin import firestore

from firebase_admin import firestore
import tempfile
import os

practitioner_blueprint = Blueprint("practitioner", __name__)
db = firestore.client()
users_ref = db.collection("practitioners")

session = {}

# Gets all exercises for a practitioner
@practitioner_blueprint.route('/all_exercises', methods=['GET'])
def all_exercises():
    try:
        practitioner = request.args.get("practitioner")
        exercises = users_ref.document(practitioner).collection("exercises").get()
        
        exercise_list = []
        for exercise in exercises:
            exercise_data = exercise.to_dict()
            exercise_data["id"] = exercise.id  # Add the ID to the exercise data
            exercise_list.append(exercise_data)
        
        return jsonify({"exercises": exercise_list}), 200
    except Exception as e:
            return jsonify({"error": str(e)}), 400

# Gets a spefic exercise for a practitioner
@practitioner_blueprint.route('/exercise', methods=['GET'])
def exercise():
    try:
        practitioner = request.args.get("practitioner")
        exercise_id = request.args.get("exercise")
        exercise_data = users_ref.document(practitioner).collection("exercises").document(exercise_id).get().to_dict()
        return jsonify({"exercise": exercise_data}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400
