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

const makeSelectCurrentBreed = () =>
  createSelector(selectGame, gameState => gameState.get('currentBreed'));

const makeSelectBreeds = () =>
  createSelector(selectGame, gameState => gameState.get('breeds'));

const makeSelectButtonsBreeds = () =>
  createSelector(selectGame, gameState => gameState.get('buttonsBreeds'));

const makeSelectDisabled = () =>
  createSelector(selectGame, gameState => gameState.get('disabled'));

const makeSelectScore = () =>
  createSelector(selectGame, gameState => gameState.get('score'));

const makeSelectMatch = () =>
  createSelector(selectGame, gameState => gameState.get('match'));

const makeSelectClicked = () =>
  createSelector(selectGame, gameState => gameState.get('clicked'));

export {
  makeSelectClickToStartaNewGame,
  makeSelectCurrentImgUrl,
  makeSelectCurrentBreed,
  makeSelectBreeds,
  makeSelectButtonsBreeds,
  makeSelectDisabled,
  makeSelectScore,
  makeSelectMatch,
  makeSelectClicked,
};
