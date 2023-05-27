import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className="hero">
    <div className="signup-container">
      <div className="signup-image">
      </div>
      <div className="signup-form">
        <div className="signup-header">
          <h1 className="signup-heading">Login</h1>
          <p className="signup-para">Dont have an account ? <Link className="login-redirect" to="/signup">Create your account</Link>, it takes less then a minute.</p>
        </div>
        <div className="signup-f">
            <form className="signup-main-form">
                <label className="signup-label">Email</label>
                <input className="signup-input"></input>
                <label className="signup-label">Password</label>
                <input className="signup-input"></input>
                <button className="button" id='login-signup-btn'>Login</button>
            </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login