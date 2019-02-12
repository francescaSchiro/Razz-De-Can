/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { TOGGLE_HAMBURGER } from './constants';
/**
 * Handles the click on random button(intercepted by saga because it has to make an async request before proceeding in updating state)
 *
 * @param  {string} requestUrl The url to pass for the axios request
 *
 * @return {object}    An action object with a type of HANDLE_RANDOM_CLICK
 */
export function toggleHamburger() {
  return {
    type: TOGGLE_HAMBURGER,
  };
}
