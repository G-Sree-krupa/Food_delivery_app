import React from 'react'
import './Login.css'

const Login = () => {

  return (
    
    <div className='container'>
      <div className='header'>
        <div className='text'>Login</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
      <div className='input'>
        <img src='' alt=''/>
        <input type='email' placeholder='email id'/>
      </div>
      <div className='input'>
        <img src='' alt=''/>
        <input type='password'placeholder='password'/>
      </div>
      </div>
      <div className="forgot-password">forgot password?<span>click here</span></div>
      <div className="submit-container">
        <button className='submit'>Login</button>
      </div>
    </div>
   
  )
}

export default Login