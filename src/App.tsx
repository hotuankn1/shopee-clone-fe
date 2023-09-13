import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import AppleWatch from './pages/apple-watch';
import Cart from './pages/cart';
import Home from './pages/home';
import OrderHistory from './pages/order-history';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/apple-watch" element={<AppleWatch />} />
      <Route path='/cart' element={<Cart />} />
      <Route path="/order/" >
      </Route>
      <Route path='/history' element={<OrderHistory />} />
    </Routes>
  </Router>
  );
}

export default App;
