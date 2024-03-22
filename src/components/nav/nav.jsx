import React from 'react';
import { NavWrapper, NavList, NavItem, NavLink  } from './nav.styles';


const Nav = () => {
    return (
      <NavWrapper>
      <NavList>
        <NavItem><NavLink href="#">Home</NavLink></NavItem>
        <NavItem><NavLink href="#">Product</NavLink></NavItem>
        <NavItem><NavLink href="#">Contact</NavLink></NavItem>
      </NavList>
    </NavWrapper>
    );
  }
  
  export default Nav;