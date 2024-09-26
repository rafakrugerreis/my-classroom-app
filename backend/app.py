from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

# Lista inicial de turmas
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

# Endpoint que retorna as turmas (GET) e adiciona novas turmas (POST)
@app.route('/api/turmas', methods=['GET', 'POST'])
def get_turmas():
    if request.method == 'POST':
        nova_turma = request.json  # Captura os dados enviados no corpo da requisição
        turmas.append(nova_turma)  # Adiciona a nova turma à lista
        return jsonify(nova_turma), 201  # Retorna a nova turma com status 201 (Created)
    
    # Se for GET, retorna a lista de turmas
    return jsonify(turmas)

if __name__ == '__main__':
    app.run(debug=True)
