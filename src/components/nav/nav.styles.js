import styled from 'styled-components';

export const NavWrapper = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;