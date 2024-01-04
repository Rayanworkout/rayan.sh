import subprocess


def build():
    """Function to execute bash script
    that executes the build process"""

    script_path = "../pipeline.sh"

    try:
        subprocess.run([script_path], check=True, shell=True)
        print("Bash script executed successfully")

    except subprocess.CalledProcessError as e:
        print(f"Error executing the bash script: {e}")
