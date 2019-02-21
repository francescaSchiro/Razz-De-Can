import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;

  height: 100%;

  text-transform: uppercase;
  font-weight: bold;
  font-weight: 600;
  letter-spacing: 0.05rem;
  border: 2px solid transparent;
  color: var(--black);

  cursor: pointer;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;

  &:hover {
    color: var(--red);
  }
  &:active {
    color: var(--red);
  }

  &:not(:last-of-type) {
    padding-right: 10px;
  }

  &:not(#logo) {
    justify-content: center;
  }
  @media (max-width: 700px) {
    &:not(:last-of-type) {
      border-bottom: 1px solid var(--white);
    }

    &:not(#logo) {
      width: 100%;
      justify-content: center;
      color: var(--white);
      &:active {
        color: var(--black);
      }
      &:hover {
        color: var(--black);
      }
    }
  }
`;

export default NavItem;
