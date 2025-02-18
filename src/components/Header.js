import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaHome, FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
import '../css/Header.css';
import LOGO from '../assets/logo (2).png';

function Header() {
  return (
    <nav className="main-nav">
      <div className="logo">
        <a href="/">
          <img src={LOGO} alt="logo" width="150px" />
        </a>
      </div>
      <div className="menu">
        <div className="number">
          <a href="tel:+91 999999999999" className="no-underline">
            <FaPhoneAlt /> &nbsp;91 999999999999
          </a>
          <span className="separator">|</span>
        </div>
       
        <div className="email">
          <a href="support@qrresq.com" className="no-underline">
            <FaEnvelope /> &nbsp;support@qrresq.com
          </a>
          <span className="separator">|</span>
        </div>
       
        <div className="login">
          <a href="/" className="no-underline">
           <FaHome />&nbsp; Home
          </a>
        </div>
        <span className="separator">|</span>
        
       
        
        
        <div className="cart">
          <a href="/login" className="no-underline">
            <FaSignInAlt />&nbsp; Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
