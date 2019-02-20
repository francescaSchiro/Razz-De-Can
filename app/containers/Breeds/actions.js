/*
 * Breeds Actions
 * */

import {
  LOAD_BREEDS,
  LOAD_BREEDS_SUCCESS,
  LOAD_BREEDS_ERROR,
  LOAD_BREEDS_IMG_URL,
  LOAD_BREEDS_IMG_URL_SUCCESS,
  LOAD_BREEDS_IMG_URL_ERROR,
  LOAD_BREED_IMGS,
  LOAD_BREED_IMGS_SUCCESS,
  // LOAD_BREED_IMGS_ERROR,
} from './constants';
/**
 * Handles the loading of all the breeds(intercepted by saga because it has to make an async request before proceeding in updating state)
 *
 *@param { string } requestUrl - the url to pass for the request
 * @return {object} breedsObject - the breeds object to mutate in order to obtain an array to manaage in LOAD_BREEDS_SUCCESS
 */
export function loadBreeds(requestUrl) {
  return {
    type: LOAD_BREEDS,
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
export function loadBreedsSuccess(breedsObj) {
  return {
    type: LOAD_BREEDS_SUCCESS,
    breedsObj,
  };
}

/**
 * Dispatched when loadBreeds fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_IMG_URL_ERROR passing the error
 */
export function loadBreedsError(error) {
  return {
    type: LOAD_BREEDS_ERROR,
    error,
  };
}
// Handle Load Breeds Img

export function loadBreedsImgUrl(requestUrl) {
  return {
    type: LOAD_BREEDS_IMG_URL,
    requestUrl,
  };
}

export function loadBreedsImgUrlSuccess(breedsImgUrl, selectedBreed) {
  return {
    type: LOAD_BREEDS_IMG_URL_SUCCESS,
    breedsImgUrl,
    selectedBreed,
  };
}

export function loadBreedsImgUrlError(error) {
  return {
    type: LOAD_BREEDS_IMG_URL_ERROR,
    error,
  };
}

// Handle Load Breeds Imgs

export function loadBreedImgs(requestUrl) {
  return {
    type: LOAD_BREED_IMGS,
    requestUrl,
  };
}
export function loadBreedImgsSuccess(breedImgs) {
  return {
    type: LOAD_BREED_IMGS_SUCCESS,
    breedImgs,
  };
}

// export function loadBreedImgsError(err) {
//   return {
//     type: LOAD_BREED_IMGS_ERROR,
//     err,
//   };
// }
