import React from 'react';
import './Sidebar2.css';

const Sidebar2 = ({ open }) => {
  return (
    <div className={`flex flex-col justify-between pt-3 pb-3 fixed ${open ? 'sidebar2' : 'sidebar2-open'}`}>
      <div className='flex items-center justify-center p-4 border-red-600'>
        <i class="fa-solid fa-signal"></i>
      </div>
      <div>
        <i class="fa-solid fa-bed-pulse"></i>
        <i class="fa-solid fa-chart-simple"></i>
        <i class="fa-solid fa-trophy"></i>
      </div>
      <div>
        Footer
      </div>
    </div>
  )
}

export default Sidebar2