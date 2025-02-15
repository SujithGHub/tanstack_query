import React from 'react';
import './Sidebar2.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar2 = ({ open }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const SideBarComponent = ({ className, to, isActive, title }) => {
    return <i
      title={title}
      onClick={() => navigate(to)}
      className={`fa-solid ${className} ${isActive ? 'active' : ''} `}>
    </i>
  }

  const sideBarItems = [
    {
      to: 'use-state',
      title: 'Use State',
      className: 'fa-bed-pulse'
    },
    {
      to: 'use-context',
      title: 'Use Context',
      className: 'fa-chart-simple'
    },
    {
      to: 'use-reducer',
      title: 'Use Reducer',
      className: 'fa-trophy'
    },
    {
      to: 'use-ref',
      title: 'Use Ref',
      className: 'fa-book'
    },
    {
      to: 'folder',
      title: 'Folder',
      className: 'fa-folder'
    },
    {
      to: 'group',
      title: 'Group',
      className: 'fa-users'
    },
    {
      to: 'community',
      title: 'Community',
      className: 'fa-walkie-talkie'
    },
    {
      to: 'learn',
      title: 'Learn',
      className: 'fa-book'
    },
  ]

  const isActive = (path) => `/${path}` === location.pathname;

  return (
    <div className={`flex flex-col justify-between fixed ${open ? 'sidebar2' : 'sidebar2-open'}`}>
      <div className='flex items-center justify-center p-4 border-red-600 h-20'>
        <i className="fa-solid fa-signal text-center"></i>
      </div>
      <div className='icon-container'>
        {sideBarItems.map((item, index) => (
          <SideBarComponent title={item.title} className={item.className} isActive={isActive(item.to)} to={item.to} key={index} />
        ))}
      </div>
      <div className='footer'>
        <img src='https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps=' alt='profile_img'></img>
      </div>
    </div>
  )
}

export default Sidebar2