import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import ProductPage from "./components/ProductPage";
import UsersPage from "./components/UsersPage";
import AnalyticsPage from "./components/AnalyticsPage";
import ReportsPage from "./components/ReportsPage";
import TotalOrdersPage from "./components/TotalOrdersPage";
import PaymentPage from "./components/PaymentPage";
import InvoicesPage from "./components/InvoicesPage";
import Settings from "./components/SettingsPage";
import RegistrationPage from "./components/RegisterationPage";
import LoginBlocks from "./components/LoginBlocks";
import ContactUs from "./components/ContactUs";
import HeroSection from "./components/HeroSection";
import LogoutPage from "./components/LogoutPage";
import LoginPage from "./components/LoginPage";
import AccLoginPage from "./components/AccLoginPage";
import AccountantDashboard from "./components/accountant/AccountantDashboard";
import AccNavbar from "./accNavbar/AccNavbar";
import AccSidebar from "./components/accsidebar/AccSidebar";



const App = () => {
  return (
    <>
      <Router>
        <div className="app">
          {/* Sidebar is usually placed outside of Routes */}
          <div className="content">
            <Routes>

              <Route path="/" element={<HeroSection />} />
              <Route path="/login" element={<LoginBlocks />} />
              <Route path="/signup" element={<RegistrationPage />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/total-orders" element={<TotalOrdersPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/invoices" element={<InvoicesPage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/signup" element={<RegistrationPage />} />
              <Route path="/" element={<LogoutPage />} />
              <Route path="/adminloginpage" element={<LoginPage />} />
              <Route path="/accountantloginpage" element={<AccLoginPage/>} />
              <Route path="/accountantdashboard" element={<AdminDashboard/>} />
              <Route path="/accnavbar" element={<AccNavbar />} />
              <Route path="/accsidebar" element={<AccSidebar />} />

            
             
               
            </Routes>
           


          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
