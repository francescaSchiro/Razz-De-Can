/* eslint-disable prettier/prettier */
/**
 * Game Reducer
 */

import { fromJS } from 'immutable';

import { getCompleteBreedsList } from 'utils/request';

import {
  LOAD_CURRENT_IMG_URL_SUCCESS, // same as in HomePage => sets currentImgUrl and currentBreed
  LOAD_CURRENT_IMG_URL_ERROR,
  LOAD_BREEDS_SUCCESS, // same as in Breeds => set breeds
  LOAD_BREEDS_ERROR,
  HANDLE_BUTTON_SUBMIT_CLICK,
  RESET_GAME_SUCCESS,
  RESET_GAME_ERROR,
} from './constants';

export const initialState = fromJS({
  currentImgUrl:
    'https://www.animalsheltering.org/sites/default/files/images/magazine/asm-spring-2017-guessing-games.jpg',
  currentBreed: '',
  clickToStartaNewGame: true,
  breeds: [],
  buttonsBreeds: [],
  clicked: '',
  disabled: false,
  score: 0,
  match: -1,
});

function gameReducer(state = initialState, action) {
  switch (action.type) {
    // handle LOAD_BREEDS request in saga
    case LOAD_BREEDS_SUCCESS:
      return state.set('breeds', getCompleteBreedsList(action.breedsObj));
    case LOAD_BREEDS_ERROR:
      // eslint-disable-next-line no-console
      return console.log(action.error);

    // eslint-disable-next-line prettier/prettier
    // handle LOAD_CURRENT_IMG_URL request in saga
    case LOAD_CURRENT_IMG_URL_SUCCESS:
      return state.get('disabled') === false ?
        state
          .set('clickToStartaNewGame', false)
          .set('currentImgUrl', action.imgUrl)
          .set('currentBreed', action.breedName)
          .set('buttonsBreeds', action.buttonsBreeds)
          .set('disabled', false)
          .set('match', state.get('match') + 1) :
        state
          .set('clickToStartaNewGame', false)
          .set('currentImgUrl', action.imgUrl)
          .set('currentBreed', action.breedName)
          .set('buttonsBreeds', action.buttonsBreeds)
          .set('disabled', false)

    case LOAD_CURRENT_IMG_URL_ERROR:
      // eslint-disable-next-line no-console
      return console.log(action.error);

    case HANDLE_BUTTON_SUBMIT_CLICK:
      return action.currentBreed === action.el
        ? state
          .set('disabled', true)
          .set('score', state.get('score') + 1)
          .set('match', state.get('match') + 1)
          .set('clicked', action.el)
        : state
          .set('disabled', true)
          .set('match', state.get('match') + 1)
          .set('clicked', action.el);

    case RESET_GAME_SUCCESS:
      return state
        .set('clickToStartaNewGame', false)
        .set('currentImgUrl', action.imgUrl)
        .set('currentBreed', action.breedName)
        .set('buttonsBreeds', action.buttonsBreeds)
        .set('disabled', false)
        .set('match', 0)
        .set('score', 0)
    case RESET_GAME_ERROR:
      // eslint-disable-next-line no-console
      return console.log(action.error);

    default:
      return state;
  }
}

export default gameReducer;

