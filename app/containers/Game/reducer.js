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
  // HANDLE_WIN,
  // HANDLE_LOSS,
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
  match: 0,
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
      return state
        .set('clickToStartaNewGame', false)
        .set('currentImgUrl', action.imgUrl)
        .set('currentBreed', action.breedName)
        .set('buttonsBreeds', action.buttonsBreeds)
        .set('disabled', false);

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

    default:
      return state;
  }
}

export default gameReducer;
// case HANDLE_WIN:
//   // document.getElementById(action.el).classList.add('win');
//   return state
//     .set('disabled', true)
//     .set('score', state.get('score') + 1)
//     .set('match', state.get('match') + 1);
// case HANDLE_LOSS:
//   // eslint-disable-next-line no-console
//   return state.set('disabled', true).set('match', state.get('match') + 1);
