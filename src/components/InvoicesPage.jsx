import React, { useState } from 'react';
import './InvoicesPage.css'
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';


const InvoicesPage = () => {
    const [invoices, setInvoices] = useState([
        { id: 1, orderId: 101, amount: "$100.00", invoiceDate: "2024-10-01", status: "Paid" },
        { id: 2, orderId: 102, amount: "$150.00", invoiceDate: "2024-10-02", status: "Pending" },
        { id: 3, orderId: 103, amount: "$200.00", invoiceDate: "2024-10-03", status: "Paid" }
    ]);

    const [formData, setFormData] = useState({
        invoiceId: '',
        orderId: '',
        amount: '',
        invoiceDate: ''
    });

    // Function to handle form submission
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newInvoice = {
            id: parseInt(formData.invoiceId),
            orderId: formData.orderId,
            amount: formData.amount,
            invoiceDate: formData.invoiceDate,
            status: "Pending"
        };

        setInvoices([...invoices, newInvoice]);
        setFormData({ invoiceId: '', orderId: '', amount: '', invoiceDate: '' }); // Reset form
    };

    // Function to handle form input changes
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    // Function to delete an invoice
    const deleteInvoice = (invoiceId) => {
        const updatedInvoices = invoices.filter(invoice => invoice.id !== invoiceId);
        setInvoices(updatedInvoices);
    };

    // Populate the invoices table
    const renderInvoiceRows = () => {
        return invoices.map((invoice) => (
            <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.orderId}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.invoiceDate}</td>
                <td>{invoice.status}</td>
                <td>
                    <button className="delete-btn" onClick={() => deleteInvoice(invoice.id)}>Delete</button>
                </td>
            </tr>
        ));
    };

    return (
        <>
        <Navbar/>
        <Sidebar/>
        <div className='invoicesInfo'>
        <div className="scrollable-container">
            <div className="invoice-form">
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="invoice_id">Invoice ID:</label> <input
                        type="number"
                        id="invoice_id"
                        value={formData.invoiceId}
                        onChange={handleInputChange}
                        required
                    />

                    <br />
                    <br />
                    <label htmlFor="order_id">Order ID:</label>
                    <input
                        type="number"
                        id="order_id"
                        value={formData.orderId}
                        onChange={handleInputChange}
                        required
                    />
                    <br />
                    <br />
                    <label htmlFor="total_amount">Amount:</label>
                    <input
                        type="text"
                        id="total_amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        required
                    />
                    
                    <label htmlFor="invoice_date">Invoice Date:</label>
                    <input
                        type="date"
                        id="invoice_date"
                        value={formData.invoiceDate}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="total_amount">Amount:</label>
                    <input
                        type="text"
                        id="total_amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        required
                    />
                    <br />
                    <br />
                    <button type="submit">Create Invoice</button>
                </form>
            </div>

            <div className="invoice-container">
                <h3>Existing Invoices</h3>
                <table id="invoiceTable">
                    <thead>
                        <tr>
                            <th>Invoice ID</th>
                            <th>Order ID</th>
                            <th>Amount</th>
                            <th>Invoice Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderInvoiceRows()}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </>
    );
};

export default InvoicesPage;
