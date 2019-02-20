import styled from 'styled-components';

const ThumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default ThumbsContainer;
