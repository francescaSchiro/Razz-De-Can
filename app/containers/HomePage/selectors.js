/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectBreedName = () =>
  createSelector(selectHome, homeState => homeState.get('breedName'));

const makeSelectImgUrl = () =>
  createSelector(selectHome, homeState => homeState.get('imgUrl'));

export { selectHome, makeSelectBreedName, makeSelectImgUrl };
