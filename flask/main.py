import subprocess
from flask import Flask

app = Flask(__name__)

@app.route("/build")
def build():
    """Endpoint to receive github webhook
    and trigger build process"""
    
    script_path = './pipeline.sh'

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
    app.run()