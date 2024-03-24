import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutComponent from './Layout';
import HomePage from './HomePage';
import ContactPage from './contact/ContactPage';
import ProductPage from './product/ProductPage';
import CheckoutPage from './checkout/CheckoutPage';
import CheckoutSuccessPage from './checkout/CheckoutSuccessPage';
import { CartProvider } from './cart/CartContext';

const MyRoutes = () => {
  return (
    <CartProvider>
    <Routes>
        <Route path="/" element={<LayoutComponent />}>
        <Route index element={<HomePage/>} /> 
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage/>} />
        </Route>
    </Routes>
    </CartProvider>
  );
}

export default MyRoutes;
