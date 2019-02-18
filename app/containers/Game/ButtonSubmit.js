/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

// const getBgColor = props => {
//   switch (props.win) {
//     case true:
//       return 'green';
//     case false:
//       return 'red';
//     default:
//       return 'black';
//   }
// };
// const getAfter = props => {
// switch (props.win) {
//   case 'yes':
//     return `
//       &::after {
//         content: '🙂';
//         position: absolute;
//         right: 0;
//         bottom: 10%;
//         font-size: 1.5rem;
//         color: white;
//       };`;
//   case 'no':
//     return `
//       &::after {
//         content:  '☹️';
//         position: absolute;
//         right:0;
//         bottom: 10%;
//         font-size: 1.5rem;
//         color: white;
//       };`;

//   default:
//     return '';
// }
// };

const getNewProps = props => {
  if (props.disabled) {
    return props.id === props.currentBreed
      ? `
      background-color: green!important;
      cursor: not-allowed;
    &::after {
      content: '🙂';
      position: absolute;
      right: 0;
      bottom: 10%;
      font-size: 1.5rem;
      color: white;
    };`
      : `
      background-color: red!important;
      cursor: not-allowed;
      &::after {
        content:  '☹️';
        position: absolute;
        right:0;
        bottom: 10%;
        font-size: 1.5rem;
        color: white;
      };`;
  }
  return '';
};

const getBgColor = props => {
  if (props.disabled && props.id === props.currentBreed) {
    return 'green';
    // eslint-disable-next-line no-cond-assign
  }
  if (props.id === props.clicked) {
    return 'red';
  }
  return 'black';
};

const ButtonSubmit = styled.button`
  position: relative;
  min-width: 310px;
  margin: 0 15px 15px 15px;
  padding: 10px 30px;

  font-size: 1rem;
  border-radius: 5px;
  background-color: black;
  background-color: ${props => getBgColor(props)};

  color: #fff;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 600;
  letter-spacing: 0.05rem;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  ${props =>
    props.disabled
      ? ''
      : `&:hover {
    background-color: red;
  }`};

  ${props => getNewProps(props)};
`;

export default ButtonSubmit;
