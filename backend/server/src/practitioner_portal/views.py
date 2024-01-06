from flask import request, jsonify, session, Blueprint
from firebase_admin import firestore

practitioner_blueprint = Blueprint('practitioner', __name__)
db = firestore.client()
users_ref = db.collection('practitioners')

@practitioner_blueprint.route('/login', methods=['POST'])
def login():
    practitioner = 'temp'
    session['practitioner'] = practitioner
    return jsonify({'success': True}), 200

@practitioner_blueprint.route('/signout', methods=['POST'])
def signout():
    session['practitioner'] = None
    return jsonify({'success': True}), 200

def get_practitioner_id():
    practitioner = session['practitioner']
    return practitioner
        
