import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Box, List, LogOut, CheckCircle, Truck, XCircle } from 'lucide-react';
import { Button, CircularProgress } from '@mui/material'; // Import Material UI loader
import './Sidebar.css';
import Logo from '../../img/logo.png';

const Sidebar = ({ isOpen, handleLogout }) => {
  const [loading, setLoading] = useState(false);

  const handleLogoutClick = () => {
    setLoading(true);
    setTimeout(() => {
      handleLogout(); // Call the actual logout function
      setLoading(false);
    }, 2000); // Simulated delay for logout
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <img src={Logo} alt="Logo" width="130" className="sidebar-logo" />
      <hr className="sidebar-divider" />

      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/DashboardPage">
            <Home size={20} /> <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <li className="sidebar-item">
          <Link to="/ChangePassword">
            <User size={20} /> <span>Change Password</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <li className="sidebar-item">
          <Link to="/userlist">
            <User size={20} /> <span>User Details</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <li className="sidebar-item">
          <Link to="/AddProducts">
            <Box size={20} /> <span>Add Product</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <li className="sidebar-item">
          <Link to="/ProductList">
            <List size={20} /> <span>Product List</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <li className="sidebar-item">
          <Link to="/OrderList">
            <List size={20} /> <span>Order List</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <li className="sidebar-item">
          <Link to="/ApprovedOrder">
            <CheckCircle size={20} /> <span>Approved Orders</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <li className="sidebar-item">
          <Link to="/DeleverdOrder">
            <Truck size={20} /> <span>Delivered Orders</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <li className="sidebar-item">
          <Link to="/RejectedOrder">
            <XCircle size={20} /> <span>Rejected Orders</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <li className="sidebar-item logout">
          <Button
            onClick={handleLogoutClick}
            variant="outlined"
            sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}
          >
            {loading ? <CircularProgress size={20} /> : <LogOut size={20} />}
            <span>{loading ? "Logging out..." : "Logout"}</span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
