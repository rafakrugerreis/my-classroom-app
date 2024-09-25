import './Topbar.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
  return (
    <div className='topbar-container'>  
      <div className='left-content'>  
        <img 
          src="/logo.png"  
          alt="Logo" 
          className='logo'  
        />
        <h1 className='titulo'>Google Classroom</h1>
      </div>
      <div className='right-content'>  
        <FontAwesomeIcon icon={faPlus} className='plus-icon' />
      </div>
    </div>
  );
}

export default TopBar;



