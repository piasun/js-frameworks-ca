import React from 'react';
import StyledButton from './button.styles';
import { useCart } from '../cart/CartContext';

const AddToCartButton = ({product}) => {
    const {addToCart} = useCart();

    return (
        <StyledButton onClick={() => addToCart(product)}>Add to Cart</StyledButton>
    ); 
};

export default AddToCartButton;
