import './Topbar.css';  // Certifique-se de que o caminho está correto
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
  return (
    <div className='topbar-container'>  {/* Contêiner principal */}
      <div className='left-content'>  {/* Subdivisão para a logo e o título */}
        <img 
          src="/logo.png"  
          alt="Logo" 
          className='logo'  
        />
        <h1 className='titulo'>Google Classroom</h1>
      </div>
      <div className='right-content'>  {/* Ícone à direita */}
        <FontAwesomeIcon icon={faPlus} className='plus-icon' />
      </div>
    </div>
  );
}

export default TopBar;



