import React, { useState,useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DashboardMain from '../components/DashboardMain';

import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';


const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate=useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 
  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="dashboard-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <DashboardMain />
        
      </div>
    </div>
  );
};

export default DashboardPage;
