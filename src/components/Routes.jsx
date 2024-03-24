import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutComponent from './Layout';
import HomePage from './HomePage';
import ContactPage from './contact/ContactPage';
import ProductPage from './product/ProductPage';
import CheckoutSuccessPage from './checkout/CheckoutSuccessPage';

const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LayoutComponent />}>
        <Route index element={<HomePage/>} /> 
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/product/:productId" element={<ProductPage/>} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage/>} />
        </Route>
    </Routes> 
  );
}

export default MyRoutes;
