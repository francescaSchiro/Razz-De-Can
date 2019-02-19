import styled from 'styled-components';

const ButtonRefresh = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.next ? 'auto' : '310px')};
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;

  border-bottom: 1px solid #9bbff5;
  /* height: 60px; */
  /* background-color: #b30000; */
  background-color: #0076b3;
  color: #fff;
  text-transform: uppercase;
  font-family: inherit;
  letter-spacing: 0.05rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #005e8f;
    color: white;
  }
  &:hover > * {
    color: white;
  }
  &:active {
    background-color: #005e8f;
  }
  &:active > * {
    transition: transform 0.1s ease-in-out;
    transform: ${props => (props.next ? 'scale(1.5)' : 'rotate(90deg)')};
  }
  @media (max-width: 700px) {
    &:hover {
      background-color: #005e8f;
      color: white;
    }
    &:active {
      background-color: #005e8f;
    }
  }
`;

export default ButtonRefresh;
