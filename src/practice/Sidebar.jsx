import React from 'react';
import '../practice/Practice.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa';

const Sidebar = ({ open, handleClick }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === `/${path}`


  return (
    <div id='hover-div' className={open ? 'side-bar' : 'side-bar-open'}>
      <button onClick={handleClick}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <button title='Home' className={isActive('first') ? 'active-button' : ''} onClick={() => navigate('first')}>
        <i className="fa-solid fa-house"></i>
        {!open && <span>Home</span>}
      </button>
      <button title='Folder Component' className={isActive('folder') ? 'active-button' : ''} onClick={() => navigate('folder')}>
        <FaFolderOpen style={{ width: '15px', height: '35px' }} />
        {!open && <span>Folder Component</span>}
      </button>
      <button title='Folder Structure' className={isActive('second') ? 'active-button' : ''} onClick={() => navigate('second')}>
        <i className="fa-solid fa-user-secret"></i>
        {!open && <span>User</span>}
      </button>
      <button className={isActive('third') ? 'active-button' : ''} onClick={() => navigate('third')}>
        <i className="fa-solid fa-network-wired"></i>
        {!open && <span>Projects</span>}
      </button>
      <button className={isActive('react-query') ? 'active-button' : ''} onClick={() => navigate('react-query')}>
        <i className="fa-solid fa-circle-exclamation"></i>
        {!open && <span>React Query</span>}
      </button>
      <button className={isActive('use-reducer') ? 'active-button' : ''} onClick={() => navigate('use-reducer')}>
        <i className="fa-solid fa-note-sticky"></i>
        {!open && <span>Use Reducer</span>}
      </button>
      <button className={isActive('use-state') ? 'active-button' : ''} onClick={() => navigate('use-state')}>
        <i className="fa-solid fa-comments"></i>
        {!open && <span>Use State</span>}
      </button>
      <button className={isActive('use-context') ? 'active-button' : ''} onClick={() => navigate('use-context')}>
        <i className="fa-brands fa-contao"></i>
        {!open && <span>Use Context</span>}
      </button>
      <button className={isActive('use-ref') ? 'active-button' : ''} onClick={() => navigate('use-ref')}>
        <i className="fa-brands fa-contao"></i>
        {!open && <span>Use Ref</span>}
      </button>
    </div>
  )
}

export default Sidebar