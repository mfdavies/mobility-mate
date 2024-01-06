from flask import request, jsonify, session, Blueprint
from firebase_admin import firestore

practitioner_blueprint = Blueprint('exercises', __name__)
db = firestore.client()
users_ref = db.collection('practitioners')

@practitioner_blueprint.route('/add', methods=['POST'])
def add_exercise():
    practitioner = request.args.get('practitioner')
    exercise = request.json.get('exercise')

    users_ref.document(practitioner).collection("exercises").document(exercise.get('name')).set({
        'description': exercise.get('description')
    })

    # TODO: add images
    return jsonify({'success': True}), 200

@practitioner_blueprint.route('/view', methods=['POST'])
def view_exercise():
    practitioner = request.args.get('practitioner')
    exercise = request.args.get('exercise')
    data = users_ref.document(practitioner).collection("exercises").document(exercise).get()
    return jsonify({'exercise': data}), 200

@practitioner_blueprint.route('/edit', methods=['POST'])
def edit_exercise():
    practitioner = request.args.get('practitioner')
    exercise = request.json.get('exercise')
    data = users_ref.document(practitioner).collection("exercises").document(exercise.get('name')).set({
        'description': exercise.get('description')
    })
    return jsonify({'exercise': data}), 200

@practitioner_blueprint.route('/get', methods=['GET'])
def get_exercises():
    practitioner = request.args.get('practitioner')
    data = users_ref.document(practitioner).collection("exercises").get()
    return jsonify({'exercises': data}), 200

