import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import Wrapper from './Wrapper';
import NavBar from './NavBar';
import NavItem from './NavItem';
// import ItemsWrapper from './ItemsWrapper';
import messages from './messages';

const Header = () => (
  <Wrapper>
    <NavItem to="/">
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </NavItem>
    <NavBar>
      <NavItem to="/">
        <FormattedMessage {...messages.home} />
      </NavItem>
      <NavItem to="/search-by-breed">
        <FormattedMessage {...messages.byBreed} />
      </NavItem>
      <NavItem to="/game">
        <FormattedMessage {...messages.game} />
      </NavItem>
    </NavBar>
  </Wrapper>
);

export default Header;
