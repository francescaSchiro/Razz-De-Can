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
} from './constants';

export const initialState = fromJS({
  currentImgUrl: '',
  currentBreed: '',
  breeds: [],
  buttonsBreeds: [],
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
        .set('currentImgUrl', action.imgUrl)
        .set('currentBreed', action.breedName)
        .set('buttonsBreeds', action.buttonsBreeds);

    case LOAD_CURRENT_IMG_URL_ERROR:
      // eslint-disable-next-line no-console
      return console.log(action.error);

    default:
      return state;
  }
}

export default gameReducer;
