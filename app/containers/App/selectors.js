/**
 * App selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.get('router');
const selectApp = state => state.get('app', initialState);

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

const makeIsHamburgerMenuVisible = () =>
  createSelector(selectApp, appState => appState.get('isHamburgerMenuVisible'));

export { makeSelectLocation, makeIsHamburgerMenuVisible };
