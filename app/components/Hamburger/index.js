import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  display: none;
  font-size: 1.3rem;
  z-index: 10;
  cursor: pointer;

  @media (max-width: 700px) {
    display: inline-block;
  }
`;

const Hamburger = ({ onHamburgerClick, isHamburgerMenuVisible }) => (
  <Wrapper onClick={onHamburgerClick}>
    <i className={isHamburgerMenuVisible ? 'fas fa-times' : 'fas fa-bars'} />
  </Wrapper>
);

Hamburger.propTypes = {
  onHamburgerClick: PropTypes.func,
  isHamburgerMenuVisible: PropTypes.bool,
};
export default Hamburger;

// {
//   props.isHamburgerMenuVisible ? (
//     <i className="fas fa-times" />
//   ) : (
//       <i className="fas fa-bars" />
//     )
// }
