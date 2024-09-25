from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

# Endpoint que retorna dados para o frontend
@app.route('/api/turmas', methods=['GET'])
def get_turmas():
    turmas = [
        {
            "nome": "Programação para interface de usuário",
            "ano": "2024",
            "professor": "LORI RONALDO FLORES MACHADO",
            "entrega": "Missão 2 - 22:30"
        },
        {
            "nome": "Sistemas Operacionais",
            "ano": "2023",
            "professor": "EDSON PADOIN",
            "entrega": "Trabalho final - 23:59"
        }
    ]
    return jsonify(turmas)

if __name__ == '__main__':
    app.run(debug=True)

