import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import DashboardPage from './dashboard/pages/DashboardPage'
import ActiveUser from './dashboard/pages/ActiveUser';
import AddProducts from './dashboard/pages/AddProducts';
import ProductList from './dashboard/pages/ProductList';
import Admin from './pages/Admin';
import OrderList from './dashboard/pages/OrderList';
import ApprovedOrder from './dashboard/pages/ApprovedOrder';
import DeleverdOrder from './dashboard/pages/DeleverdOrder';
import RejectedOrder from './dashboard/pages/RejectedOrder';
import ChangePassword from './dashboard/pages/ChangePassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          {/* Admin Dashboard */}
        <Route path="/DashboardPage" element={<DashboardPage />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/userlist" element={<ActiveUser />} />
        <Route path="/AddProducts" element={<AddProducts />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/OrderList" element={<OrderList/>}/>
        <Route path="/ApprovedOrder" element={<ApprovedOrder/>}/>
        <Route path="/DeleverdOrder" element={<DeleverdOrder/>}/>
        <Route path="/RejectedOrder" element={<RejectedOrder/>}/>
        
        </Routes>

      </div>
    </Router>
  );
}

export default App;
