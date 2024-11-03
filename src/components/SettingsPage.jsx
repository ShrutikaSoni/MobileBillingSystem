import React, { useState } from "react";
import "./SettingsPage.css";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";


const SettingsPage = () => {
  const [settings, setSettings] = useState({
    siteName: "My Admin Dashboard",
    currency: "USD",
    timezone: "UTC",
    emailNotifications: "enabled",
    theme: "light",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newSettings = {
      siteName: event.target.siteName.value,
      currency: event.target.currency.value,
      timezone: event.target.timezone.value,
      emailNotifications: event.target.emailNotifications.value,
      theme: event.target.theme.value,
    };

    setSettings(newSettings);
    setMessage("Settings updated successfully!");

    // Clear the message after a few seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);

    // Reset the form
    event.target.reset();
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className={`SettingsInfo ${settings.theme}-theme`}>
      <div className="scrollable-container">
  
        <div className="settings-form-container">
          <div className="settings-form">
            <form onSubmit={handleSubmit}>
              {/* Form Fields */}
              <label htmlFor="siteName">Site Name:</label>
              <input type="text" id="siteName" required defaultValue={settings.siteName} />
              <br />
              <label htmlFor="currency">Currency:</label>
              <input type="text" id="currency" required defaultValue={settings.currency} />
              <br />
              <label htmlFor="timezone">Timezone:</label>
              <input type="text" id="timezone" required defaultValue={settings.timezone} />
              <br />
              <label htmlFor="emailNotifications">Email Notifications:</label>
              <select id="emailNotifications" defaultValue={settings.emailNotifications}>
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
              <br />
              <label htmlFor="theme">Theme:</label>
              <select id="theme" defaultValue={settings.theme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
              <br />
              <br />
              <button type="submit">Update Settings</button>
            </form>
            <div id="message" style={{ color: "green" }}>{message}</div>
          </div>

          <div className="current-settings">
            <h3>Current Settings</h3>
            <p><strong>Site Name:</strong> {settings.siteName}</p>
            <p><strong>Currency:</strong> {settings.currency}</p>
            <p><strong>Timezone:</strong> {settings.timezone}</p>
            <p><strong>Email Notifications:</strong> {settings.emailNotifications}</p>
            <p><strong>Theme:</strong> {settings.theme}</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SettingsPage;
