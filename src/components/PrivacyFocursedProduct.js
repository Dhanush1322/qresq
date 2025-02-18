import React from 'react';
import { FaCar, FaBicycle, FaLock, FaAddressCard, FaMobileAlt, FaVideo, FaDoorOpen } from 'react-icons/fa'; // Import the icons you need
import '../css/PrivacyFocursedProduct.css'; // Import the custom CSS

function PrivacyFocursedProduct() {
  return (
    <div className="privacy-container">
      
      <h2 className="heading">PRODUCTS
<br/>Scan. Connect. Communicate.
</h2>
      <div className="product-container">
        <div className="product">
          <FaCar className="icon-icon" /> {/* Use the React icon component for Car & Bike Parking */}
          <h4 className="product-title">CAR PARKING TAG</h4>
          <p className="product-description">
          Allows individuals to contact
vehicle owners without
revealing personal contact
details
          </p>
        </div>
        <div className="product">
          <FaAddressCard className="icon-icon" /> {/* Use the React icon component for NFC Business Card */}
          <h4 className="product-title">BIKE PARKING TAG
          </h4>
          <p className="product-description">
          Features masked calls,
WhatsApp notifications, and
emergency contact options
          </p>
        </div>
        <div className="product">
          <FaVideo className="icon-icon" /> {/* Use the React icon component for Video Call Door Tag */}
          <h4 className="product-title">NFC BUSINESS CARD</h4>
          <p className="product-description">
          Supports social media profiles,
Google Business location, price
lists, and portfolios
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyFocursedProduct;
