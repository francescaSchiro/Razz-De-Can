/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Breeds from 'containers/Breeds/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from 'global-styles';
// import NavBar from 'components/NavBar';
import Header from 'components/Header';
import Wrapper from './Wrapper';

export default function App() {
  return (
    <Wrapper>
      <Header />
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
