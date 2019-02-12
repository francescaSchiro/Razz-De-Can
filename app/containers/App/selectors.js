/**
 * App selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.get('global', initialState);
const selectRouter = state => state.get('router');

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

const makeSelectIsHamburgerMenuVisible = () =>
  createSelector(selectGlobal, globalState =>
    globalState.get('isHamburgerMenuVisible'),
  );

export { makeSelectLocation, makeSelectIsHamburgerMenuVisible };
