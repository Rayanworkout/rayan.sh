import subprocess
from flask import Flask, request

app = Flask(__name__)

@app.route("/build", methods=["POST"])
def build():
    """Endpoint to receive github webhook
    and trigger build process"""
    
    data = request.get_json()
    script_path = '../pipeline.sh'
    
    try:
        subprocess.run([script_path], check=True, shell=True)
        print("Bash script executed successfully")
        
    except subprocess.CalledProcessError as e:
        print(f"Error executing the bash script: {e}")
    
    return {
        "status": "success",
        "message": "Build process triggered"
    }


if __name__ == "__main__":
    app.run(
        host="0.0.0.0"
    )