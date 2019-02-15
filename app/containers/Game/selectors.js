/**
 * Game selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGame = state => state.get('game', initialState);

const makeSelectClickToStartaNewGame = () =>
  createSelector(selectGame, gameState =>
    gameState.get('clickToStartaNewGame'),
  );

const makeSelectCurrentImgUrl = () =>
  createSelector(selectGame, gameState => gameState.get('currentImgUrl'));

const makeSelectBreeds = () =>
  createSelector(selectGame, gameState => gameState.get('breeds'));

const makeSelectButtonsBreeds = () =>
  createSelector(selectGame, gameState => gameState.get('buttonsBreeds'));

export {
  makeSelectClickToStartaNewGame,
  makeSelectCurrentImgUrl,
  makeSelectBreeds,
  makeSelectButtonsBreeds,
};
