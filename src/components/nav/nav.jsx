import React from 'react';
import StyledNav from './nav.styles';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
      <StyledNav>
        <ul>
          <li><Link to="./">Home</Link></li>
          <li><Link to="../contact">Contact</Link></li>
        </ul>
    </StyledNav>
    );
  }
  
  export default Nav;