import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import H1 from 'components/H1';
import Hamburger from 'components/Hamburger';
import injectReducer from 'utils/injectReducer';
import { makeSelectIsHamburgerMenuVisible } from 'containers/App/selectors';
import { toggleHamburger } from 'containers/App/actions';
import reducer from 'containers/App/reducer';
import Wrapper from './Wrapper';
import NavBar from './NavBar';
import NavItem from './NavItem';

import messages from './messages';

// eslint-disable-next-line react/prefer-stateless-function
export class Header extends React.Component {
  render() {
    const { isHamburgerMenuVisible, onHamburgerClick } = this.props;
    return (
      <Wrapper>
        <NavItem id="logo" to="/" exact>
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
        <Hamburger
          onHamburgerClick={onHamburgerClick}
          isHamburgerMenuVisible={isHamburgerMenuVisible}
        />
        <NavBar isHamburgerMenuVisible={isHamburgerMenuVisible}>
          <NavItem
            to="/"
            exact
            activeClassName="navLinkActive"
            onClick={onHamburgerClick}
          >
            <FormattedMessage {...messages.home} />
          </NavItem>
          <NavItem
            to="/search-by-breed"
            activeClassName="navLinkActive"
            onClick={onHamburgerClick}
          >
            <FormattedMessage {...messages.byBreed} />
          </NavItem>
          <NavItem
            to="/game"
            activeClassName="navLinkActive"
            onClick={onHamburgerClick}
          >
            <FormattedMessage {...messages.game} />
          </NavItem>
        </NavBar>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  isHamburgerMenuVisible: PropTypes.bool,
  onHamburgerClick: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onHamburgerClick: () => dispatch(toggleHamburger()),
  };
}

const mapStateToProps = createStructuredSelector({
  isHamburgerMenuVisible: makeSelectIsHamburgerMenuVisible(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'global', reducer });

export default compose(
  withReducer,
  withConnect,
)(Header);
