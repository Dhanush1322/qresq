import React from 'react';
import LOGO from '../assets/logo (2).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css';

function Footer() {
  return (
    <div className='main-footer'>
      <div className='footer'>
        {/* Logo Section */}
        <div className='footer-logo'>
          <img src={LOGO} alt="logo" />
        </div>
        
        {/* Links Section */}
        <div className='footer-links'>
          <p>Quick Links</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className='footer-contact-us'>
          <p>Contact Us</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} className="icon" /> +91 999999999999
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="icon" /> : support@qrresq.com
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 17, Civil Lines, Jaipur, Rajasthan-302006
            </li>
          </ul>
        </div>
        
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
