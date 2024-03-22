import React from 'react';
import Header from './header.styles';
import Nav from '../nav/nav';
import CartIcon from '../cartIcon/cartIcon';

const HeaderComponent = () => {
  
  return (
    <Header>
      <Nav/>
      <CartIcon/>
    </Header>
  );
};

export default HeaderComponent;