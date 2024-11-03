import React, { useState } from "react";
import "./AccSidebar.css"; 
import "boxicons/css/boxicons.min.css"; 


const AccSidebar = () => {
  const [isActive, setIsActive] = useState(false);


  return (

    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="logo-details">
        <img src='MobillwithoutBg1.png' alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/accountantdashboard">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/update">
            <i className="bx bx-box"></i>
            <span className="links_name">Update</span>
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
          <a href="/ordered-list">
            <i className="bx bxs-report"></i>
            <span className="links_name">OrderedList</span>
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
          <a href="/feedback">
            <i className="bx bx-cog"></i>
            <span className="links_name">Feedback</span>
          </a>
        </li>
            <li>
          <a href="#">
            <i className="bx bx-log-out"></i>
            <span className="links_name">Log out</span>
          </a>
          </li>
      </ul>
      
    </div>
 
  );
};

export default AccSidebar;
