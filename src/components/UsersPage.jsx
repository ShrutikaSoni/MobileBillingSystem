import React from "react";
import { Link } from "react-router-dom"; 
import "./UsersPage.css"; 
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";


const UsersPage = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
  <div className='UserInformation'>
    <div className="login-blocks-container">
      <div className="login-block admin-login">
        <h1>Admin</h1>
        <Link to="/signup">
          <button>Add Admin</button>
        </Link>
      </div>
      <div className="login-block accountant-login">
        <h1>Accountant</h1>
        <Link to="/signup">
          <button>Add Accountant</button>
        </Link>
      </div>
      <div className="login-block customer-login">
        <h1>Customer</h1>
        <Link to="/signup">
          <button>Add Customer</button>
        </Link>
      </div>
    </div>
    </div>
    
    </>
  );
};

export default UsersPage;
