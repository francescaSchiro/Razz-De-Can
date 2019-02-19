import styled from 'styled-components';

const DogImg = styled.div`
  /* background-color: #b30000; */

  background-image: url(${props => props.imgUrl});
  background-size: contain; /* <------ */
  background-repeat: no-repeat;
  background-position: top center;
  height: ${props => (props.game ? '300px' : '500px')};
  width: 100vw;
  margin: 15px 0;
  /* border: 2px solid red; */
`;

export default DogImg;
