import React from 'react';
import '../css/LoginSection.css';

function LoginSection() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" required />
          </div>
          <button type="submit" className="submit-btn">Login</button>
          <p>
            Don't have an account? 
            <a href="/register" className="register-link">Please register.</a>
          </p> {/* Adjusted the message */}
        </form>
      </div>
    </div>
  );
}

export default LoginSection;
