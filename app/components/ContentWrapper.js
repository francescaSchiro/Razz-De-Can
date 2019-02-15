import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-top: 75px;
  padding-top: 15px;
  width: 100%;
  /*height of footer + 15*/
  padding-bottom: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default ContentWrapper;
