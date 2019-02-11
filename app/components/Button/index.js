import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 40px;
  background-color: #ff0000;
  color: white;

  border-radius: 10px;
  font-family: 'Nunito', sans-serif;
  letter-spacing: 0.05rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #ff3333;
    color: white;
  }
  &:active {
    background-color: #b30000;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
