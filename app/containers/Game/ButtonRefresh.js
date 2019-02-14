import styled from 'styled-components';

const ButtonRefresh = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  padding: 15px 100vw;
  border-radius: 5px;

  border-bottom: 1px solid #9bbff5;
  /* height: 60px; */
  background-color: #b30000;
  color: #fff;
  text-transform: uppercase;
  font-family: inherit;
  letter-spacing: 0.05rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: red;
    color: white;
  }
  &:hover > * {
    color: white;
  }
  &:active {
    background-color: red;
  }
  &:active > * {
    transition: transform 0.1s ease-in-out;

    transform: rotate(90deg);
  }
  @media (max-width: 700px) {
    &:hover {
      background-color: #b30000;
      color: white;
    }
    &:active {
      background-color: red;
    }
  }
`;

export default ButtonRefresh;
