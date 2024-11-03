import React from 'react';
import './AccLoginPage.css'; // Make sure to add your CSS styles in this file
import { Link } from 'react-router-dom';
const AccLoginPage= () => {
  return (
    <div className="wrapper">
      <div className="title">
        Login Form
      </div>
      <form action="#">
        <div className="field">
          <input type="text" required />
          <label>Email Address</label>
        </div>
        <div className="field">
          <input type="password" required />
          <label>Password</label>
        </div>
       
          <div className="checkbox">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="pass-link">
            <a href="#">Forgot password?</a>
          </div>
        
        <div className="field">
          <Link to="/accountantdashboard" style={{ textDecoration: 'none', color: 'white' }}><button type='submit'>Login</button></Link>
        </div>
      </form>
    </div>
  );
};

export default AccLoginPage;
