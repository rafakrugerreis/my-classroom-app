import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

function CardTurma() {
  return (
    <div className='card-container'>
      <div className='card-header'>
        <h2 className='course-name'>IJ - Programação para interface de usuário</h2>
        <p className='course-year'>2024</p>
        <p className='professor-name'>LORI RONALDO FLORES MACHADO</p>
      </div>
      
      <div className='card-body'>
        <p className='assignment-info'>
          Data de entrega é amanhã:
          22:30 – Missão 2 - 
        </p>
        <div className='profile-circle'>L</div>
      </div>

      <div className='card-footer'>
        <FontAwesomeIcon icon={faClipboard} className='card-icon-clipboard' />
        <FontAwesomeIcon icon={faFolderOpen} className='card-icon-folder' />
      </div>
    </div>
  );
}

export default CardTurma;
