/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import HomePage from 'containers/HomePage/Loadable';
import Breeds from 'containers/Breeds/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from 'global-styles';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Wrapper from './Wrapper';
import reducer from './reducer';
import { toggleHamburger } from './actions';
import { makeIsHamburgerMenuVisible } from './selectors';

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.PureComponent {
  render() {
    const { isHamburgerMenuVisible, onHamburgerClick } = this.props;
    return (
      <Wrapper>
        <Header
          isHamburgerMenuVisible={isHamburgerMenuVisible}
          onHamburgerClick={onHamburgerClick}
        />
        <Footer />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search-by-breed" component={Breeds} />
          {/* <Route path="/game" component={Game} /> */}
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </Wrapper>
    );
  }
}

App.propTypes = {
  isHamburgerMenuVisible: PropTypes.bool,
  onHamburgerClick: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onHamburgerClick: () => dispatch(toggleHamburger()),
  };
}

const mapStateToProps = createStructuredSelector({
  isHamburgerMenuVisible: makeIsHamburgerMenuVisible(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'app', reducer });

export default compose(
  withReducer,
  withConnect,
)(App);
