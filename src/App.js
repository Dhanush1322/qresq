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
        <Route path="/userlist" element={<ActiveUser />} />
        <Route path="/AddProducts" element={<AddProducts />} />
        <Route path="/ProductList" element={<ProductList />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
