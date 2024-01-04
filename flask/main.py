from flask import Flask, request
import os
from dotenv import load_dotenv
load_dotenv()

# Function to verify the signature
# To ensure that the payload was sent from GitHub
from validate_hash import verify_signature

# Function to perform the build process via a bash script
from build_project import build

app = Flask(__name__)


@app.route("/build", methods=["POST"])
def build():
    """Endpoint to receive github webhook
    and trigger build process"""

    secret_header = request.headers.get("X-Hub-Signature-256")
    payload = request.data
    secret_key = os.getenv("GITHUB_WEBHOOK_SECRET")

    if verify_signature(
        payload_body=payload,
        signature_header=secret_header,
        secret_token=secret_key,
        ):

        print("Signature verified")
        build()
    
        return {"status": "success", "message": "Build process triggered"}

    else:
        return {"status": "error", "message": "Invalid signature"}


if __name__ == "__main__":
    app.run(host="0.0.0.0")