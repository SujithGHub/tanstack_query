import React from 'react';
import '../practice/Practice.css';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Content = () => {

  const { open } = useOutletContext();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Content</h2>
      <button className='button-normal' onClick={() => navigate('/first')}>First Component</button>
    </div>
  )
}

export default Content