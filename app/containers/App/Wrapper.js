import styled from 'styled-components';

const Wrapper = styled.div`
  /* to fix footer at bottom */
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default Wrapper;
