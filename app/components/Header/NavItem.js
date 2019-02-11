import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(Link)`
  padding: 10px;
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
    background-color: red;
    color: white;
    border-radius: 10px;
  }
`;

export default NavItem;
