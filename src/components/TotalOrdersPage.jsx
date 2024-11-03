import React, { useState} from "react";
import "./TotalOrdersPage.css"; 
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";


const TotalOrdersPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer_name: "John Doe", order_date: "2024-10-01", total_amount: "$100.00", status: "Completed" },
    { id: 2, customer_name: "Jane Smith", order_date: "2024-10-02", total_amount: "$150.00", status: "Pending" },
    { id: 3, customer_name: "Alice Johnson", order_date: "2024-10-03", total_amount: "$200.00", status: "Pending" },
    { id: 4, customer_name: "Bob Brown", order_date: "2024-10-04", total_amount: "$250.00", status: "Completed" },
    { id: 5, customer_name: "Michael Lee", order_date: "2024-10-05", total_amount: "$300.00", status: "Completed" },
    { id: 6, customer_name: "Emily Davis", order_date: "2024-10-06", total_amount: "$175.00", status: "In Progress" },
    { id: 7, customer_name: "David Wilson", order_date: "2024-10-07", total_amount: "$225.00", status: "Completed" },
    { id: 8, customer_name: "Sarah Miller", order_date: "2024-10-08", total_amount: "$50.00", status: "Completed" },
    { id: 9, customer_name: "James Taylor", order_date: "2024-10-09", total_amount: "$400.00", status: "Pending" },
    { id: 10, customer_name: "Jessica Clark", order_date: "2024-10-10", total_amount: "$125.00", status: "Completed" },
  ]);

 
  const deleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <>
    <Navbar/>
    <Sidebar/>
   
    <div className="totalOrderPage">
    <div className="scrollable-container">
    <div className="main-content">
      <div className="order-container">
        <table id="orderTable">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer_name}</td>
                <td>{order.order_date}</td>
                <td>{order.total_amount}</td>
                <td>{order.status}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteOrder(order.id)}
                  >
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

export default TotalOrdersPage;
