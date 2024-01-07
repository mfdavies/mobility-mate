from flask import request, jsonify, Blueprint
from firebase_admin import firestore

from firebase_admin import firestore
import tempfile
import os

exercise_blueprint = Blueprint("exercise", __name__)
db = firestore.client()
users_ref = db.collection("practitioners")

session = {}


@exercise_blueprint.route('/get_all', methods=['GET'])
def get_all():
    practitioner = request.args.get("practitioner")
    exercises = users_ref.document(practitioner).collection("exercises").get()
    
    exercise_list = []
    for exercise in exercises:
        exercise_data = exercise.to_dict()
        exercise_list.append(exercise_data)
    
    return jsonify({"exercises": exercise_list}), 200

@exercise_blueprint.route('/get', methods=['GET'])
def get():
    practitioner = request.args.get("practitioner")
    exercise_id = request.args.get("exercise")
    exercise_data = users_ref.document(practitioner).collection("exercises").document(exercise_id).get().to_dict()
    return jsonify({"exercise": exercise_data}), 200
