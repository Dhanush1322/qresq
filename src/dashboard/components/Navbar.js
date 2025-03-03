import React from 'react';
import './Navbar.css'; // Import CSS for styling
import { FaSearch, FaUserCircle } from 'react-icons/fa'; // Import icons

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar1">
      {/* Hamburger Menu for mobile view */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>

      {/* Admin Dashboard Heading */}
      <h3>Admin Dashboard</h3>

      {/* Profile Icon */}
      <div className="navbar-profile">
        <FaUserCircle className="profile-icon" />
      </div>
    </div>
  );
};

export default Navbar;
