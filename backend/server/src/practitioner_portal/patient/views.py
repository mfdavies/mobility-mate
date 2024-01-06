from flask import request, jsonify, session, Blueprint
from firebase_admin import firestore

from backend.server.src.practitioner_portal.views import get_practitioner_id

practitioner_patient_blueprint = Blueprint('practitioner/patient', __name__)
db = firestore.client()
users_ref = db.collection('practitioners')

@practitioner_patient_blueprint.route('/add', methods=['POST'])
def add():
    practitioner = get_practitioner_id()
    if practitioner is None:
        return jsonify({'Failed': False}), 401
    patient = request.args.get('patient')

    users_ref.document(practitioner).collection("patients").document(patient.get('patient_id')).set({
        'name': patient.get('name'),
        'email': patient.get('email'),
        'exercises': []
    })

    # TODO: send email to patient
    return jsonify({'success': True}), 200


@practitioner_patient_blueprint.route('/view', methods=['POST'])
def view():
    practitioner = get_practitioner_id()
    if practitioner is None:
        return jsonify({'Failed': False}), 401
    
    patient = users_ref.document(practitioner).collection("patients").document(request.args.get('patient').get('patient_id'))
    return jsonify({'Patient': patient}), 200

@practitioner_patient_blueprint.route('/edit', methods=['POST'])
def edit():
    practitioner = get_practitioner_id()
    if practitioner is None:
        return jsonify({'Failed': False}), 401
    patient = request.args.get('patient')

    users_ref.document(practitioner).collection("patients").document(patient.get('patient_id')).set({
        'name': patient.get('name'),
        'email': patient.get('email'),
        'exercises': patient.get('exercises'),
    })
    return jsonify({'success': True}), 200

@practitioner_patient_blueprint.route('/get_all', methods=['GET'])
def get_all():
    practitioner = get_practitioner_id()
    if practitioner is None:
        return jsonify({'Failed': False}), 401
    patients = users_ref.document(practitioner).collection("patients").get()
    # data = []
    # for patient in patients:
    #     data.append(patient.to_dict())
    return jsonify({'Patients': patients}), 200

