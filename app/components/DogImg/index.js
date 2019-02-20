import styled from 'styled-components';

const DogImg = styled.div`
  /* background-color:var(--red); */

  background-image: url(${props => props.imgUrl});
  background-size: contain; /* <------ */
  background-repeat: no-repeat;
  background-position: top center;
  height: ${props => (props.game ? '300px' : '400px')};
  width: 100vw;
  margin: 15px 0;
  /* border: 2px solid red; */
`;

export default DogImg;
