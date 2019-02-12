import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  font-size: 0.7rem;

  transition: all 0.5s ease-in-out;
`;

export default NavBar;

/* @media (max-width: 400px) {
  position: absolute;
  margin: 0;
  padding: 15px;
  top: 0;
  left: 0;
  background-color: red;
  flex-direction: column;
  color: white;
  height: 100%;
  font-size: 1.2rem;
  &:hover {
    font-size: 1.3rem;
  }
} */
