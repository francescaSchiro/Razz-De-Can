/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';

import GlobalStyle from 'global-styles';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Wrapper from './Wrapper';

import Routes from './Routes';

const App = () => (
  <Wrapper>
    <Header />
    <Routes />
    <Footer />
    <GlobalStyle />
  </Wrapper>
);

export default App;
