/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

function getWinningProps(props) {
  if (props.disabled && props.id === props.currentBreed) {
    return `
    background-color: var(--blue)!important;
    cursor: default;
  &::after {
    content: '🙂';
    position: absolute;
    right: 0;
    bottom: 10%;
    font-size: 1.5rem;
    color: white;
    // @media (max-width: 700px) {
    //   font-size: 1rem;
    //   bottom: 15%;
    //   right:2%;
    // }
  };`;
  }
  if (
    props.disabled &&
    props.clicked === props.id &&
    props.clicked !== props.currentBreed
  ) {
    return `
    background-color: var(--red)!important;
    cursor: default;
    &::after {
      content:  '☹️';
      position: absolute;
      right:0;
      bottom: 10%;
      font-size: 1.5rem;
      color: white;
      // @media (max-width: 700px) {
      //   font-size: 1rem;
      //   bottom: 15%;
      //   right:2%;
      // }
    };`;
  }
  if (props.disabled) {
    return 'color: grey!important; cursor: default;';
  }
  return 'background-color: var(--black)';
}

const ButtonSubmit = styled.button`
  position: relative;
  min-width: 310px;
  margin: 0 15px 15px 15px;
  padding: 10px 30px;
  z-index: 1;
  font-size: 1rem;
  border-radius: 5px;
  background-color: var(--black);

  color: var(--white);
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 600;
  letter-spacing: 0.05rem;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  ${props =>
    props.disabled
      ? ''
      : `&:hover {
    background-color: var(--red);
  }`};

  ${props => getWinningProps(props)};
`;

export default ButtonSubmit;

/* @media (max-width: 700px) {
  min-width: 240px;
  font-size: 0.7em;
  /* padding: 5px 20px;
} */
