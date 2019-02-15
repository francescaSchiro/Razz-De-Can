import styled from 'styled-components';

const ButtonSubmit = styled.button`
  min-width: 310px;
  margin: 0 15px 15px 15px;
  padding: 10px 30px;

  font-size: 1rem;
  border-radius: 5px;
  background-color: black;
  color: #fff;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 600;
  letter-spacing: 0.05rem;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;

export default ButtonSubmit;
