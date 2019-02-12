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
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    height: ${props => (props.isHamburgerMenuVisible ? '100vh' : '0')};
    width: 100vw;

    margin: 0;
    padding: 15px;
    top: 0;
    left: 0;
    color: white;
    font-size: 1.2rem;
  }
`;

export default NavBar;
