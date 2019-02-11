import styled from 'styled-components';

const Wrapper = styled.div`
  /* padding: 10px 0 0 0; */
  margin: 0 15px;

  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    body {
      flex-direction: column;
      background-color: red;
      color: white;
    }
  }
`;

export default Wrapper;
