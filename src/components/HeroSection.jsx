import React from 'react';
import './HeroSection.css';
import Navbarside from './Navbarside';

const HeroSection = () => {
  return (
    <>
      <Navbarside />
      <section className="hero-section">
        <div className="content">
          <h2>Powerful Invoicing Meets Seamless Shopping!</h2>
          <p>
            Mobill: Streamlining invoice generation for admins while offering customers a seamless eCommerce experience for mobile shopping.
          </p>
          <br />
          <div className="container-button">
            <div className="hover bt-1"></div>
            <div className="hover bt-2"></div>
            <div className="hover bt-3"></div>
            <div className="hover bt-4"></div>
            <div className="hover bt-5"></div>
            <div className="hover bt-6"></div>
            <button className='btn'>Order Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
