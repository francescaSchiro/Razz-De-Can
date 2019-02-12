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
    'https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  // imgUrl: 'http://media.tvblog.it/d/dcf/02_21_2017_00_00_18.jpg',
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
