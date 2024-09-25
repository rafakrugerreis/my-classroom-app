import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';
import { faBars, faBookOpen, faCalendar, faHouse, faUserGroup, faGraduationCap, faBoxArchive, faGear} from '@fortawesome/free-solid-svg-icons';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
      <FontAwesomeIcon icon={faBars} className='bars' style={{color: 'gray' }} />
      </div>
      <ul className="sidebar-menu">
      <li className="sidebar-item">
        <FontAwesomeIcon icon={faHouse} className='house' style={{color: 'gray'}} />
        </li>
        <li className="sidebar-item">
        <FontAwesomeIcon icon={faCalendar} className='calendar' style={{color: 'gray'}} />
        </li>
        <li className="sidebar-item">
        <FontAwesomeIcon icon={faBookOpen} className='book-open' style={{color: 'gray'}} />
        </li>
        <li className="sidebar-item">
        <FontAwesomeIcon icon={faUserGroup} className='user-group' style={{color: 'gray'}} />
        </li>
        <li className="sidebar-item">
        <FontAwesomeIcon icon={faGraduationCap} className='graduation-cap' style={{color: 'gray'}} />
        </li>
        <li className="sidebar-item">
        <FontAwesomeIcon icon={faBoxArchive} className='box-archive' style={{color: 'gray'}} />
        </li>
        <li className="sidebar-item">
        <FontAwesomeIcon icon={faGear} className='gear' style={{color: 'gray'}} />
        </li>
      </ul>
    </div>
  );
}
