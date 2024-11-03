import React, { useState } from "react";
import "./Sidebar.css"; 
import "boxicons/css/boxicons.min.css"; 


const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);


  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="logo-details">
        <img src='MobillwithoutBg1.png' alt="Logo" />
      </div>
      <br/>
      
      <ul className="nav-links">
        <li>
          <a href="/dashboard">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/products">
            <i className="bx bx-box"></i>
            <span className="links_name">Products</span>
          </a>
        </li>
        <li>
          <a href="/users">
            <i className="bx bxs-user-account"></i>
            <span className="links_name">Users</span>
          </a>
        </li>
        <li>
          <a href="/analytics">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Analytics</span>
          </a>
        </li>
        <li>
          <a href="/reports">
            <i className="bx bxs-report"></i>
            <span className="links_name">Reports</span>
          </a>
        </li>
        <li>
          <a href="/total-orders">
            <i className="bx bx-mobile"></i>
            <span className="links_name">Total Order</span>
          </a>
        </li>
        <li>
          <a href="/payment">
            <i className="bx bx-wallet"></i>
            <span className="links_name">Payment</span>
          </a>
        </li>
        <li>
          <a href="/invoices">
            <i className="bx bx-detail"></i>
            <span className="links_name">Invoices</span>
          </a>
        </li>
        <li>
          <a href="/settings">
            <i className="bx bx-cog"></i>
            <span className="links_name">Settings</span>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="bx bx-log-out"></i>
            <span className="links_name">Log out</span>
          </a>
        </li>
      </ul>
      
    </div>
  );
};

export default Sidebar;
