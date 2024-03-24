import React from 'react';
import { useCart } from '../cart/CartContext';
import Cart from '../cart/Cart';


const CheckoutPage = () => {
    const { products } = useCart();
  return (
    <div>
      <Cart product={products}/>
    </div>
  );
}

export default CheckoutPage;
