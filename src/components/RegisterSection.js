import React from 'react';
import '../css/RegisterSection.css';

function RegisterSection() {
  return (
    <div className="Register-container">
      <div className="Register-box">
        <h2>Register</h2>
        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" required />
          </div>

          <button type="submit" className="submit-btn">Register</button>
          <p>
            Already have an account? 
            <a href="/login" className="register-link">Login here.</a>
          </p> {/* Adjusted the message */}
        </form>
      </div>
    </div>
  );
}

export default RegisterSection;
