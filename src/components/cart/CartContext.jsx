import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setproducts] = useState([]);

  const addToCart = (item) => {
    setproducts((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setproducts((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  const itemCount = products.length;

  return (
    <CartContext.Provider value={{ products, addToCart, removeFromCart, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
