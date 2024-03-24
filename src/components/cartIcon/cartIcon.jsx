import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { StyledCartIcon, ItemCountOverlay } from './cartIcon.styles';
import { useCart } from '../cart/CartContext';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const  { itemCount }  = useCart();

  return (
    <Link to="/checkout">
    <StyledCartIcon>
      <FontAwesomeIcon icon={faShoppingCart} />
      {itemCount > 0 && <ItemCountOverlay>{itemCount}</ItemCountOverlay>}
    </StyledCartIcon>
    </Link>
  );
}

export default CartIcon;
