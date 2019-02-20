import styled from 'styled-components';

const Select = styled.select`
  font-family: 'Nunito', sans-serif;
  padding: 5px 10px;
  border-radius: 5px;

  border: 1px solid var(--red);
  background-color: var(--red);
  color: var(--white);
  letter-spacing: 0.05rem;
  font-size: 1rem;
  margin-left: 15px;
  cursor: pointer;

  /*active item*/
  &:focus > option:checked {
    background-color: var(--darkRed) !important;
  }

  @media (max-width: 700px) {
    font-size: 0.7rem;
  }
`;

export default Select;
