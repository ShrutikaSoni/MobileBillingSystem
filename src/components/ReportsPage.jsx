import React, { useState, useEffect } from "react";
import "./ReportsPage.css"; 
import Sidebar from "./sideBar/Sidebar";
import Navbar from "./navbar/Navbar";

const ReportsPage = () => {
  const [reports, setReports] = useState([
    { id: 1, name: "Sales Report", dateCreated: "2024-10-01", status: "Completed" },
    { id: 2, name: "Inventory Report", dateCreated: "2024-10-02", status: "In Progress" },
    { id: 3, name: "User Activity Report", dateCreated: "2024-10-03", status: "Completed" },
    { id: 4, name: "Expense Report", dateCreated: "2024-10-04", status: "Pending" },
    { id: 5, name: "Customer Feedback Report", dateCreated: "2024-10-05", status: "Completed" },
    { id: 6, name: "Monthly Revenue Report", dateCreated: "2024-10-06", status: "In Progress" },
    { id: 7, name: "Marketing Performance Report", dateCreated: "2024-10-07", status: "Completed" },
  ]);

  const deleteReport = (reportId) => {
    setReports(reports.filter((report) => report.id !== reportId));
  };

  useEffect(() => {
    // This will be used if any additional data fetching or setup is required on component mount
  }, []);

  return (
    <>
    <Navbar/>
    <Sidebar/>
   
    <div className="ReportsInfo">
    <div className="scrollable-container">
    <div className="main-content">
      <div className="report-container">
        <table id="reportTable">
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Report Name</th>
              <th>Date Created</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.name}</td>
                <td>{report.dateCreated}</td>
                <td>{report.status}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteReport(report.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default ReportsPage;
