import React from 'react';
import "./LoginBlocks.css";
import { Link } from 'react-router-dom';

const LoginBlocks = () => {
  return (

    <div className="login-blocks-container">


      <div className="login-block admin-login">
        <h1>Admin</h1>
        <Link to="/adminloginpage" style={{ textDecoration: 'none', color: 'white' }}><button>Login as Admin</button></Link>
      </div>
      <div className="login-block accountant-login">
        <h1>Accountant</h1>
        <Link to="/accountantloginpage" style={{ textDecoration: 'none', color: 'white' }}><button> Login as Accountant</button></Link>
      </div>
      <div className="login-block customer-login">
        <h1>Customer</h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><button>Login as Customer</button></Link>

      </div>
    </div>

  );
};

export default LoginBlocks;

