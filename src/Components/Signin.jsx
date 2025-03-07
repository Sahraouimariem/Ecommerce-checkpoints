import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signin } from './redux/Action';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    console.log(password,email)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleSignin = (e) => {
        e.preventDefault()
        dispatch(signin({email, password},navigate))
        }
  return (
    <div>
        <div className="container">
  <div className="signin-card">
    <div className="logo" style={{color:"#fcc4d4"}} >
      <svg viewBox="0 0 100 100" width={80} height={80}   >
        <circle
        
          cx={50}
          cy={50}
          r={45}
          fill="none"
          stroke="#4A90E2"
          strokeWidth={8}
        />
        <path

       
          d="M50 25v35M32.5 42.5l17.5 17.5 17.5-17.5"
          fill="none"
          stroke="#4A90E2"
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <h1>Welcome Back</h1>
    <form id="signin-form">
      <div className="input-group">
        <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" required="" />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-group">
        <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" required="" />
        <label htmlFor="password">Password</label>
      </div>
      <div className="options">
        <label className="remember">
          <input type="checkbox" id="remember" />
          <span>Remember me</span>
        </label>
        <a href="https://example.com/forgot-password">Forgot password?</a>
      </div>
      <button style={{backgroundColor:"#fcc4d4"}} onClick={handleSignin} type="submit">Sign In</button>
    </form>
    <p className="signup-link">
      Don't have an account? <a href="https://example.com/signup">Sign up</a>
    </p>
  </div>
</div>
    </div>
  )
}

export default Signin