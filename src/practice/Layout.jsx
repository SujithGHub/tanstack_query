import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../practice/Practice.css';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  const [open, setOpen] = useState(false)

  const handleSideBar = () => {
    setOpen(!open);
  }

  return (
    <div className='overall-container'>
      <Header open={open} />
      <Sidebar open={open} handleClick={handleSideBar} />
      <div className={!open ? 'content-container-open' : 'content-container'}>
        <Outlet context={{ open }} />
      </div>
    </div>
  );
}

export default Layout