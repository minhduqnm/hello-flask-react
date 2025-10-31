from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow calls from React frontend

@app.route('/api/hello')
def hello():
    return jsonify(message="Hello from Flask Backend on Render!")

@app.route('/')
def home():
    return jsonify(status="Backend Flask is running!")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)
