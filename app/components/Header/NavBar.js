import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  font-size: 0.7rem;

  transition: all 0.5s ease-in-out;

  @media (max-width: 700px) {
    display: flex;
    transform: ${props =>
      props.isHamburgerMenuVisible ? 'translateY(0)' : 'translateY(-1000px)'};
    opacity: ${props => (props.isHamburgerMenuVisible ? '1' : '0')};
    background-color: rgba(255, 255, 255, 0.8);
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 5;

    margin: 0;
    padding: 15px;
    top: 0;
    left: 0;
    font-size: 1.2rem;
  }
`;

export default NavBar;
