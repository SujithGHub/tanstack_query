import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../practice/Practice.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';

const Layout = () => {
  const [open, setOpen] = useState(true)

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