import styled from 'styled-components';

const Button = styled.button`
  margin-left: ${props => (props.stats ? '0px' : '30px')};
  padding: 10px 30px;
  background-color: ${props =>
    props.primary ? 'var(--black)' : 'var(--white)'};
  border: ${props =>
    props.primary ? '2px solid var(--white)' : '2px solid var(--red)'};
  color: ${props => (props.primary ? 'var(--white)' : 'var(--red)')};
  font-size: 1rem;

  border-radius: 5px;
  font-family: 'Nunito', sans-serif;
  letter-spacing: 0.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${props =>
    props.primary
      ? '&:hover {background-color: var(--red);color: var(--white)};'
      : '&:hover {background-color: var(--red);color: var(--white); ;}'};

  &:active {
    background-color: var(--darkRed);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 700px) {
    ${props =>
      props.primary
        ? '&:hover {background-color: var(--black);color: var(--white)};'
        : '&:hover {background-color: var(--white);color: var(--red);}'};
    /* &:hover {
      background-color: var(--black);
      color: var(--white);
    } */
    /* &:active {
      background-color: var(--white);
    } */

    font-size: 0.7em;
    padding: 5px 20px;
  }
`;

export default Button;

// function getButtonBg(props) {
//   switch (props) {
//     case props.primary:
//       return 'black';
//     case props.next:
//       return 'white';
//     case props.success:
//       return 'green';
//     case props.alert:
//       return 'red';
//     case props.disabled:
//       return 'gray';
//     default:
//       return 'black';
//   }
// }

// function getTextColor(props) {
//   switch (props) {
//     case props.primary:
//       return 'white';
//     case props.secondary:
//       return 'black';
//     default:
//       return 'white';
//   }
// }
// function getBorderColor(props) {
//   switch (props) {
//     case props.primary:
//       return 'black';
//     case props.secondary:
//       return 'black';
//     case props.success:
//       return 'green';
//     case props.alert:
//       return 'red';
//     case props.disabled:
//       return 'gray';
//     default:
//       return 'red';
//   }
// }
