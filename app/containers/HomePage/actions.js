/*
 * Home Actions
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

import {
  LOAD_IMG_URL,
  LOAD_IMG_URL_SUCCESS,
  LOAD_IMG_URL_ERROR,
} from './constants';
/**
 * Handles the click on random button(intercepted by saga because it has to make an async request before proceeding in updating state)
 *
 * @param  {string} requestUrl The url to pass for the axios request
 *
 * @return {object}    An action object with a type of HANDLE_RANDOM_CLICK
 */
export function loadImgUrl(requestUrl) {
  return {
    type: LOAD_IMG_URL,
    requestUrl,
  };
}

/**
 * Dispatched when the imgUrl is loaded by the request saga
 *
 * @param  {string} imgUrl The url to pass to the <DogImg>
 * @param  {string} breedName the name of the breed extracted from the imgUrl
 *
 * @return {object}      An action object with a type of LOAD_IMG_URL passing the imgUrl and the breedName
 */
export function loadImgUrlSuccess(imgUrl, breedName) {
  return {
    type: LOAD_IMG_URL_SUCCESS,
    imgUrl,
    breedName,
  };
}

/**
 * Dispatched when loading imgUrl fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_IMG_URL_ERROR passing the error
 */
export function loadImgUrlError(error) {
  return {
    type: LOAD_IMG_URL_ERROR,
    error,
  };
}
