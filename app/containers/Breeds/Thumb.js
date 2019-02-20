import styled from 'styled-components';

const Thumb = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  border: 1px solid white;
  background-image: url(${props => props.imgUrl});

  background-size: cover;

  /* @media (max-width: 700px) {
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
  text-align: center; */
`;

export default Thumb;
