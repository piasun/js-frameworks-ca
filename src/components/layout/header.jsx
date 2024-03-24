import React from 'react';
import Header from './header.styles';
import Nav from '../nav/nav';
import { StyledCartIcon } from '../cartIcon/cartIcon.styles';


const HeaderComponent = () => {
  
  return (
    <Header>
      <Nav/>
      <StyledCartIcon/>
    </Header>
  );
};

export default HeaderComponent;