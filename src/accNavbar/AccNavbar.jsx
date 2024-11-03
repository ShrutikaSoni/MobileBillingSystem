import React from "react";
import "./AccNavbar.css"; 
import "boxicons/css/boxicons.min.css"; 

const AccNavbar = () => {
  return (
    <section className="home-section">
      <nav>
        <div className="sidebar-button">
          <i className="bx bx-menu sidebarBtn"></i>
          <span className="dashboard">Dashboard</span>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <i className="bx bx-search"></i>
        </div>
        <i className="bx bxs-bell" style={{ fontSize: "20px" }}></i>
        <div className="profile-details">
          <img src="adminLogo.png" alt="Accountant Logo" />
          <span className="accountant_name">Accountant</span>
        </div>
      </nav>
    </section>
  );
};

export default AccNavbar;
