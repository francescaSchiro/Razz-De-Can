import styled from 'styled-components';

const DogImg = styled.div`
  /* background-color: #b30000; */

  background-image: url(${props => props.imgUrl});
  background-size: contain; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  height: 500px;
  width: 100vw;
  /* border: 2px solid red; */
`;

export default DogImg;
