import styled from 'styled-components';

const DogImg = styled.div`
  background-color: papayawhip;
  background-image: url(${props => props.imgUrl});
  background-size: contain; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  height: 400px;
  width: 100vw;
  /* border: 2px solid red; */
`;

export default DogImg;
