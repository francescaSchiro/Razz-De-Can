/*
 * HomeReducer
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

import {
  //   LOAD_IMG_URL,
  LOAD_IMG_URL_SUCCESS,
  LOAD_IMG_URL_ERROR,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  breedName: '',
  imgUrl:
    'https://www.painted-pets.com/wp-content/plugins/wc-painting/assets/imgs/dog-portraits-watching-700.jpg',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_IMG_URL_SUCCESS:
      return state
        .set('imgUrl', action.imgUrl)
        .set('breedName', action.breedName);
    case LOAD_IMG_URL_ERROR:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default homeReducer;
