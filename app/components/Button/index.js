import styled from 'styled-components';

const Button = styled.button`
  margin-left: 30px;
  padding: 10px 40px;
  background-color: #ff0000;
  color: white;
  font-size: 1rem;

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

  @media (max-width: 400px) {
    font-size: 0.7em;
    padding: 5px 20px;
  }
`;

export default Button;
