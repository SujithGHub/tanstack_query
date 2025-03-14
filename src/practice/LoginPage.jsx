import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigate = useNavigate();

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex items-center flex-col gap-4'>
        <h3>Start Practicing....</h3>
        <button className='bg-black p-2 border-3 rounded-[10px] text-white' onClick={() => navigate('/practice')}>Practice</button>
      </div>
    </div>
  )
}

export default LoginPage