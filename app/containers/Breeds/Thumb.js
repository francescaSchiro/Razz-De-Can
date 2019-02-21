import styled from 'styled-components';

function getCurrentProps(props) {
  if (props.current) {
    return `&::after { content:'';
   position:absolute;
   width: 100%;
   height: 100%;
   background-color: var(--red);
   opacity: 0.5;
   top: 0;
   left:0;
 }
 `;
  }
  return ``;
}

const Thumb = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  background-color: tomato;
  border: 1px solid white;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  cursor: ${props => (props.current ? 'default' : 'pointer')};
  &:hover {
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--red);
      opacity: 0.5;
      top: 0;
      left: 0;
    }
  }

  @media (max-width: 700px) {
    &:hover {
      &::after {
        content: '';
      }
    }
  }

  ${props => getCurrentProps(props)};
`;

export default Thumb;
