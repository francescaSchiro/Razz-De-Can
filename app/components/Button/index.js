import styled from 'styled-components';

// function getButtonBg(props) {
//   switch (props) {
//     case props.primary:
//       return 'black';
//     case props.secondary:
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

const Button = styled.button`
  margin-left: 30px;
  padding: 10px 30px;
  background-color: ${props => (props.primary ? 'black' : 'white')};
  border: ${props => (props.primary ? '2px solid white' : '2px solid black')};
  color: ${props => (props.primary ? 'white' : 'black')};
  font-size: 1rem;

  border-radius: 5px;
  font-family: 'Nunito', sans-serif;
  letter-spacing: 0.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: red;
    color: white;
  }
  &:active {
    background-color: #b30000;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 700px) {
    &:hover {
      background-color: black;
      color: white;
    }
    &:active {
      background-color: #b30000;
    }
    font-size: 0.7em;
    padding: 5px 20px;
  }
`;

export default Button;
