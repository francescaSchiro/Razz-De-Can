import styled from 'styled-components';

const H2 = styled.h2`
  text-align: right;
  font-size: 1rem;
  margin: 0.2rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.03rem;
  position: relative;
  /* width: 100%; */
  &::before {
    content: '';
    width: 10000%;
    border-bottom: 1px solid red;
    position: absolute;
    right: 110%;
    top: 50%;
    z-index: 1;
  }

  @media (max-width: 400px) {
    font-size: 0.7em;
  }
`;

export default H2;
