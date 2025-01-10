import React from 'react';
import '../practice/Practice.css'

const Header = ({open}) => {
  return (
    <div className={open ? 'practice-header' : 'practice-header-open'}>
      Header
    </div>
  )
}

export default Header