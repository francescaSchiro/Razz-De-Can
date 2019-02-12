import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import Wrapper from './Wrapper';
import NavBar from './NavBar';
import NavItem from './NavItem';

import messages from './messages';

const Header = () => (
  <Wrapper>
    <NavItem to="/" exact>
      <H1>
        <i
          style={{
            marginRight: '10px',
          }}
          className="fas fa-dog"
        />
        <FormattedMessage {...messages.header} />
      </H1>
    </NavItem>

    <NavBar>
      <NavItem to="/" exact activeClassName="navLinkActive">
        <FormattedMessage {...messages.home} />
      </NavItem>
      <NavItem to="/search-by-breed" activeClassName="navLinkActive">
        <FormattedMessage {...messages.byBreed} />
      </NavItem>
      <NavItem to="/game" activeClassName="navLinkActive">
        <FormattedMessage {...messages.game} />
      </NavItem>
    </NavBar>
  </Wrapper>
);

export default Header;
