import React from "react";
import { FaTags, FaChartLine, FaSmile, FaUserCircle } from "react-icons/fa"; // Import icons
import "../css/CustomerReview.css";

function CustomerReview() {
  return (
    <div className="customer-review-container">
      {/* First Section: Content */}
      <div className="review-content">
        <h2>We Make Tech, for Privacy.</h2>
      </div>

      {/* Second Section: Statistics */}
      <div className="review-stats">
        <div className="stat-box">
          <FaTags className="stat-icon" />
          <h3>150,000+</h3>
          <p>Active Tags</p>
        </div>
        <div className="stat-box">
          <FaChartLine className="stat-icon" />
          <h3>200%+</h3>
          <p>Revenue Growth</p>
        </div>
        <div className="stat-box">
          <FaSmile className="stat-icon" />
          <h3>98%</h3>
          <p>Customer Satisfaction</p>
        </div>
      </div>

      {/* Third Section: Customer Reviews */}
      <div className="customer-feedback">
        <h2>What Our Customers Say</h2>
        <div className="feedback-container">
          <div className="feedback-card">
            <FaUserCircle className="user-icon" />
            <p>"Great service! The privacy-focused tech is amazing."</p>
            <h4>- John Doe</h4>
          </div>
          <div className="feedback-card">
            <FaUserCircle className="user-icon" />
            <p>"Highly recommend! Their NFC business cards are awesome."</p>
            <h4>- Sarah Smith</h4>
          </div>
          <div className="feedback-card">
            <FaUserCircle className="user-icon" />
            <p>"Customer support is fantastic! Truly a great experience."</p>
            <h4>- Michael Brown</h4>
          </div>
          <div className="feedback-card">
            <FaUserCircle className="user-icon" />
            <p>"I love the innovation! The video call door tag is a game changer."</p>
            <h4>- Emma Wilson</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
