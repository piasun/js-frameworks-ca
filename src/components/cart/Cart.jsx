import React from 'react';
import { useCartStore } from '../../hooks/cartStoreHook';
import { useNavigate } from 'react-router-dom';
import StyledCart from './Cart.styles';
import { Link } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const { products, removeProduct, clearCart } = useCartStore(({ products, removeProduct, clearCart }) => ({ products, removeProduct, clearCart }));

  const calculateTotalPrice = () =>
    products.reduce((total, { price, discountedPrice, quantity }) => total + (Math.min(price, discountedPrice) * quantity), 0).toFixed(2);

  const handleCheckout = () => {
    if (products.length > 0) {
      clearCart();
      navigate('/checkout-success');
    } else {
      alert('There are no products in your Cart');
    }
  };

  const productList = products.map(({ id, title, price, discountedPrice, quantity }) => (
    <section key={id}>
      <Link to={`/product/${id}`}>
        <h3>{title}</h3>
      </Link>
      <div>
        {price === discountedPrice ? <p>Price: {price.toFixed(2)}</p> : (
          <div>
            <p>Original: {price.toFixed(2)}</p>
            <p>Discounted: {discountedPrice.toFixed(2)}</p>
          </div>
        )}
        <p>Quantity: {quantity}</p>
        <p>Total: ${(Math.min(price, discountedPrice) * quantity).toFixed(2)}</p>
        <button onClick={() => removeProduct(id)}>Remove Product</button>
      </div>
    </section>
  ));

  return (
    <StyledCart>
      <h1>Cart Overview</h1>
      <div>
        <section>
          <h2>Your Products</h2>
          <div>{productList}</div>
        </section>
        <section>
          <h2>Total Amount</h2>
          <p>{calculateTotalPrice()} $</p>
        </section>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </StyledCart>
  );
}

export default Cart;
