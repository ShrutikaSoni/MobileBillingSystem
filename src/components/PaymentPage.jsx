import React, { useState, useEffect } from "react";
import "./PaymentPage.css"; // Add appropriate styling if needed
import Navbar from "./navbar/Navbar";
import Sidebar from "./sideBar/Sidebar";

const PaymentPage = () => {
  // Sample payment data
  const [payments, setPayments] = useState([
    { id: 1, orderId: 101, amount: "$100.00", paymentDate: "2024-10-01", status: "Completed" },
    { id: 2, orderId: 102, amount: "$150.00", paymentDate: "2024-10-02", status: "Pending" },
    { id: 3, orderId: 103, amount: "$200.00", paymentDate: "2024-10-03", status: "Completed" },
    { id: 4, orderId: 104, amount: "$250.00", paymentDate: "2024-10-04", status: "Failed" },
  ]);

  const [orderId, setOrderId] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    const newPayment = {
      id: payments.length + 1,
      orderId: orderId,
      amount: amount,
      paymentDate: paymentDate,
      status: "Pending", // Default status
    };

    setPayments([...payments, newPayment]);
    // Clear the form
    setOrderId("");
    setAmount("");
    setPaymentDate("");
  };

  // Function to delete a payment
  const deletePayment = (paymentId) => {
    const updatedPayments = payments.filter((payment) => payment.id !== paymentId);
    setPayments(updatedPayments);
  };

  // Function to populate the payments table
  const renderPaymentsTable = () => {
    return payments.map((payment) => (
      <tr key={payment.id}>
        <td>{payment.id}</td>
        <td>{payment.orderId}</td>
        <td>{payment.amount}</td>
        <td>{payment.paymentDate}</td>
        <td>{payment.status}</td>
        <td>
          <button className="delete-btn" onClick={() => deletePayment(payment.id)}>
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
    <Navbar/>
    <Sidebar/>
   
    <div className="PaymentInfo">
    <div className="scrollable-container">
    <div className="payment-form-container">
      <div className="payment-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="orderId">Order ID:</label>
          <input
            type="number"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
          <br />
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <br />
          <label htmlFor="paymentDate">Payment Date:</label>
          <input
            type="date"
            id="paymentDate"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            required
          />
          <br />
          <br />
          <button type="submit">Add Payment</button>
        </form>
      </div>
      <div className="payment-container">
        <h3>Existing Payments</h3>
        <table className="payment-table">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Order ID</th>
              <th>Amount</th>
              <th>Payment Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{renderPaymentsTable()}</tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default PaymentPage;
