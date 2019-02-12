import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  display: ${props => (props.isHamburgerMenuVisible ? '' : '')};
  font-size: 1.3rem;

  @media (max-width: 700px) {
    display: inline-block;
  }
`;

const Hamburger = props => (
  // eslint-disable-next-line react/prop-types
  <Wrapper onClick={props.onHamburgerClick(props.isHamburgerMenuVisible)}>
    {props.isHamburgerMenuVisible ? (
      <i className="fas fa-times" />
    ) : (
      <i className="fas fa-bars" />
    )}
  </Wrapper>
);

export default Hamburger;
