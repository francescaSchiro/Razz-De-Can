import styled from 'styled-components';

const Option = styled.option`
  background-color: var(--red);
  color: ${props => (props.disabled ? 'var(--darkRed)' : 'var(--white)')};

  &:checked {
    cursor: pointer;
    box-shadow: 0 0 10px 100px --var(darkBlue) inset;
  }
`;

export default Option;
