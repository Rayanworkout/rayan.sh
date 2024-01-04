from flask import Flask, request
import os

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

    secret = request.headers.get("X-Hub-Signature-256")
    payload = request.json()

    if verify_signature(
        payload_body=payload,
        signature_header=secret,
        secret_token=os.getenv("GITHUB_WEBHOOK_SECRET"),
        ):
        
        build()
    
    return {"status": "success", "message": "Build process triggered"}


if __name__ == "__main__":
    app.run(host="0.0.0.0")
