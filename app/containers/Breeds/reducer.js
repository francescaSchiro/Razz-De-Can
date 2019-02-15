/*
 * Breeds Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { getCompleteBreedsList } from 'utils/request';
import {
  LOAD_BREEDS_SUCCESS,
  LOAD_BREEDS_ERROR,
  LOAD_BREEDS_IMG_URL_SUCCESS,
  LOAD_BREEDS_IMG_URL_ERROR,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  breeds: [],
  breedsImgUrl: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_946.jpg',
  selectedBreed: 'affenpinscher',
});

function breedsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BREEDS_SUCCESS:
      return state.set('breeds', getCompleteBreedsList(action.breedsObj));
    case LOAD_BREEDS_ERROR:
      return state.set('error', action.error);
    case LOAD_BREEDS_IMG_URL_SUCCESS:
      return state
        .set('breedsImgUrl', action.breedsImgUrl)
        .set('selectedBreed', action.selectedBreed);
    case LOAD_BREEDS_IMG_URL_ERROR:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default breedsReducer;
