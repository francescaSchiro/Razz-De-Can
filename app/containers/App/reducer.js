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

import { TOGGLE_HAMBURGER } from './constants';

// The initial state of the App
export const initialState = fromJS({
  isHamburgerMenuVisible: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_HAMBURGER:
      return state.set(
        'isHamburgerMenuVisible',
        !state.get('isHamburgerMenuVisible'),
      );
    default:
      return state;
  }
}

export default appReducer;
