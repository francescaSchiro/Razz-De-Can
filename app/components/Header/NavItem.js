import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  text-transform: uppercase;
  font-weight: bold;
  font-weight: 600;
  letter-spacing: 0.05rem;
  border: 2px solid transparent;
  color: black;

  cursor: pointer;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;

  &:hover {
    color: red;
  }
  &:active {
    color: #b30000;
  }
  &:not(:last-of-type) {
    margin-right: 10px;
  }

  /* @media (max-width: 700px) {
    &:hover {
      color: red;
    }
  } */
`;

export default NavItem;
