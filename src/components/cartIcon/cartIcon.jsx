import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartIconWrapper, Badge } from './cartIcon.styles';

const CartIcon = ({ itemCount }) => {
  return (
    <CartIconWrapper>
      <FontAwesomeIcon icon={faShoppingCart} />
      <Badge>{itemCount}</Badge>
    </CartIconWrapper>
  );
}

export default CartIcon;
