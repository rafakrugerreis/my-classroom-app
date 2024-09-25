"use client"; // Indica que o código será executado no navegador e não no servidor, ou seja ele deixa de ser um server component e passa ser um client component 
import './Card.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

function CardTurma() {
  const [turmas, setTurmas] = useState([]);

  // Pesquisa as turmas na API
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/turmas')
      .then(response => response.json())
      .then(data => setTurmas(data))
      .catch(err => console.error('Erro ao buscar turmas:', err));
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

