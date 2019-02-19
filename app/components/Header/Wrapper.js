import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  /* overflow: hidden; */
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  height: 75px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 0.7rem;

  transition: all 0.5s ease-in-out;
  z-index: 1000;
`;

export default Wrapper;

/* @media (max-width: 400px) {
  position: absolute;
  margin: 0;
  padding: 15px;
  top: 0;
  left: 0;
  background-color: red;
  flex-direction: column;
  color: white;
  height: 100%;
  font-size: 1.2rem;
  &:hover {
    font-size: 1.3rem;
  }
} */
