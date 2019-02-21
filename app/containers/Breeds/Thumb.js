import styled from 'styled-components';

const Thumb = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  background-color: tomato;
  border: ${props =>
    props.current === true ? '5px solid green' : '1px solid white'};
  background-image: url(${props => props.imgUrl});
  background-size: cover;

  ${props =>
    props.current
      ? `
 &:after {
   content:'';
   position:absolute;
   background-color: var(--red);
  //  opacity: 0.5;
   top: 0;
   right:50px;
 }
 `
      : null} /* @media (max-width: 700px) {
    flex-grow: 1;
  } */

  /* background: tomato;
  padding: 5px;
  width: 200px;
  height: 150px;
  margin-top: 10px;
  
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center; */;
`;

export default Thumb;
