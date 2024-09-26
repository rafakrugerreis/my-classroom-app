"use client";
import './Card.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

function CardTurma() {
  const [turmas, setTurmas] = useState([]);

  // Função para buscar as turmas da API
  const fetchTurmas = () => {
    fetch('http://127.0.0.1:5000/api/turmas')
      .then(response => response.json())
      .then(data => setTurmas(data))
      .catch(err => console.error('Erro ao buscar turmas:', err));
  };

  // Chama a função de busca quando o componente é montado e em intervalos regulares
  useEffect(() => {
    fetchTurmas(); // Busca as turmas na montagem do componente
    const intervalId = setInterval(fetchTurmas, 5000); // Atualiza a lista a cada 5 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <div className='card-container'>
      {turmas.length === 0 ? (
        <p>Nenhuma turma encontrada</p>
      ) : (
        turmas.map((turma, index) => (
          <div key={index} className='card'>
            <div className='card-header'>
              <h2 className='course-name'>{turma.nome}</h2>
              <p className='course-year'>{turma.ano}</p>
              <p className='professor-name'>{turma.professor}</p>
            </div>

            <div className='card-body'>
              <p className='assignment-info'>
                Data de entrega: {turma.entrega}
              </p>
              <div className='profile-circle'>
                {turma.professor.charAt(0)}
              </div>
            </div>

            <div className='card-footer'>
              <FontAwesomeIcon icon={faClipboard} className='card-icon-clipboard' />
              <FontAwesomeIcon icon={faFolderOpen} className='card-icon-folder' />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CardTurma;
