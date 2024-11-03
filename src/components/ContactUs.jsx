import React from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
  return (
    <div className="container">
      <div className="contact-box">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <form>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
           
            <div className="input-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" required />
            </div>
            <div className="input-group-1">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-right">
          <h3>Reach Us</h3>
          <table>
            <tbody>
              <tr>
                <td>Email:</td>
                <td>contact@mobill.com</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>+123-456-7890</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>123 Mobile Street, City, Country</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
