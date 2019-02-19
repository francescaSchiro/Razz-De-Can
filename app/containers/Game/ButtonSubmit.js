/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

function getWinningProps(props) {
  if (props.disabled && props.id === props.currentBreed) {
    return `
    background-color: green!important;
    cursor: not-allowed;
  &::after {
    content: '🙂';
    position: absolute;
    right: 0;
    bottom: 10%;
    font-size: 1.5rem;
    color: white;
  };`;
    // eslint-disable-next-line no-cond-assign
  }
  if (
    props.disabled &&
    props.clicked === props.id &&
    props.clicked !== props.currentBreed
  ) {
    return `
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
  return 'black';
}

const ButtonSubmit = styled.button`
  position: relative;
  min-width: 310px;
  margin: 0 15px 15px 15px;
  padding: 10px 30px;
  z-index: 1;
  font-size: 1rem;
  border-radius: 5px;
  background-color: black;

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

  ${props => getWinningProps(props)};
`;

export default ButtonSubmit;
