import React from 'react';
import StyledNav from './nav.styles';
import { Link } from 'react-router-dom';
import CartIcon from '../cartIcon/cartIcon';
import { useCart } from '../cart/CartContext';


const Nav = () => {
  const itemCount = useCart;

    return (
      <>
      <StyledNav>
        <ul>
          <li><Link to="./">Home</Link></li>
          <li><Link to="../contact/ContactPage.jsx">Contact</Link></li>
        </ul>
    </StyledNav>
    <CartIcon itemCount={itemCount}/>
    </>
    );
  }
  
  export default Nav;