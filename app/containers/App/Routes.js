import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Breeds from 'containers/Breeds/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/search-by-breed" component={Breeds} />
    {/* <Route path="/game" component={Game} /> */}
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
