from flask import Flask, request, jsonify, render_template
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os
from constants import *
import time
import firebase_admin
from firebase_admin import credentials
from flask_cors import CORS

load_dotenv()
app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")
cred = credentials.Certificate(os.getenv("service"))
firebase_admin.initialize_app(cred)

from conversation.views import conversation_blueprint

# Register the conversation Blueprint
app.register_blueprint(conversation_blueprint, url_prefix="/conversation")
CORS(app)

# Load Flask-Mail config from .env
app.config["MAIL_SERVER"] = os.getenv("MAIL_SERVER")
app.config["MAIL_PORT"] = int(os.getenv("MAIL_PORT"))
app.config["MAIL_USE_TLS"] = os.getenv("MAIL_USE_TLS").lower() == "true"
app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_DEFAULT_SENDER")
mail = Mail(app)


@app.route("/patient/send-link", methods=["POST"])
def send_link():
    try:
        data = request.get_json()
        uid = data.get("uid")
        name = data.get("name")
        email = data.get("email")

        # Send patient email with login link
        message = Message(
            subject=EMAIL_SUBJECT,
            recipients=[email],
            body=EMAIL_BODY_TEMPLATE.format(name=name, uid=uid),
        )
        mail.send(message)

        return jsonify({"success": True, "message": "Email sent successfully"})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)})


def format_server_time():
    server_time = time.localtime()
    return time.strftime("%I:%M:%S %p", server_time)


@app.route("/")
def index():
    context = {"server_time": format_server_time()}
    return render_template("index.html", context=context)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
