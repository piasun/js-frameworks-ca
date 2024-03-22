import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutComponent from './Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';

const MyRoutes = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<LayoutComponent />}>
        <Route index element={<HomePage/>} /> 
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/product/:productId" element={<ProductPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage/>} />
        </Route>
    </Routes>
    </Router>
  );
}

export default MyRoutes;
