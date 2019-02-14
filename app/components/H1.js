import styled from 'styled-components';

const H1 = styled.h1`
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 2rem;

  font-family: 'Nunito', sans-serif;
  font-weight: 600;

  @media (max-width: 720px) {
    font-size: 1.5em;
    /* padding: 5px 20px; */
  }
`;

export default H1;
