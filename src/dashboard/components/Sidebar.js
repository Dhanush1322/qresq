import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Settings, Box, List, LogOut, CheckCircle, Truck, XCircle } from 'lucide-react';
import './Sidebar.css'; // Import CSS for styling
import Logo from '../../img/logo.png';

const Sidebar = ({ isOpen }) => {
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
          <Link to="/ApprovedOrders">
            <CheckCircle size={20} /> <span>Approved Orders</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <li className="sidebar-item">
          <Link to="/DeliveredOrders">
            <Truck size={20} /> <span>Delivered Orders</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <li className="sidebar-item">
          <Link to="/RejectedOrders">
            <XCircle size={20} /> <span>Rejected Orders</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <li className="sidebar-item logout">
          <Link to="/logout">
            <LogOut size={20} /> <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
