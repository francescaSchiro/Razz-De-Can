/* eslint-disable indent */
import styled from 'styled-components';

const NavBar = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: white;

  font-size: 0.7rem;

  transition: all 0.5s ease-in-out;

  @media (max-width: 700px) {
    position: absolute;
    top: 0;
    left: 0;
    /* azzero padding di Header Wrapper*/
    padding: -15px;
    height: 100vh;
    width: 100vw;
    display: flex;
    transform: ${props =>
      props.isHamburgerMenuVisible ? 'translateY(0)' : 'translateY(-1000px)'};
    opacity: ${props => (props.isHamburgerMenuVisible ? '1' : '0')};
    /* background-color: rgba(255, 255, 255, 0.8); */
    background-color: #b30000;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 5;

    /* padding: 15px; */
    font-size: 1.2rem;
  }
`;

export default NavBar;
