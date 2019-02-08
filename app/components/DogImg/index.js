import styled from 'styled-components';

const DogImg = styled.div`
  background-image: url(${props => props.imgUrl});
  height: 370px;
  width: 370px;
  border: 2px solid red;
`;

export default DogImg;
