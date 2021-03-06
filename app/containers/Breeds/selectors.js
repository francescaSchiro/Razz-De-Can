/**
 * Breeds selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBreeds = state => state.get('breeds', initialState);

const makeSelectBreeds = () =>
  createSelector(selectBreeds, breedsState => breedsState.get('breeds'));

const makeSelectBreedsImgUrl = () =>
  createSelector(selectBreeds, breedsState => breedsState.get('breedsImgUrl'));

const makeSelectSelectedBreed = () =>
  createSelector(selectBreeds, breedsState => breedsState.get('selectedBreed'));

const makeSelectBreedImgs = () =>
  createSelector(selectBreeds, breedsState => breedsState.get('breedImgs'));

export {
  makeSelectBreeds,
  makeSelectBreedsImgUrl,
  makeSelectSelectedBreed,
  makeSelectBreedImgs,
};
