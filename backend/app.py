from flask import Flask

import firebase_admin
from firebase_admin import credentials

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'

cred = credentials.Certificate('service.json')
firebase_admin.initialize_app(cred)


from conversation.views import conversation_blueprint  
# Register the conversation Blueprint
app.register_blueprint(conversation_blueprint, url_prefix='/conversation')


if __name__ == '__main__':
    app.run(debug=True)
