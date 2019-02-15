/**
 * Game Actions
 */

import {
  HANDLE_GET_GAME_DATA,
  LOAD_CURRENT_IMG_URL_SUCCESS,
  LOAD_CURRENT_IMG_URL_ERROR,
  LOAD_BREEDS,
  LOAD_BREEDS_SUCCESS,
  LOAD_BREEDS_ERROR,
} from './constants';

export function handleGetGameData(reqImgUrl, reqBreedsUrl, breeds) {
  return {
    type: HANDLE_GET_GAME_DATA,
    reqImgUrl,
    reqBreedsUrl,
    breeds,
  };
}

export function loadBreeds(requestUrl) {
  return {
    type: LOAD_BREEDS,
    requestUrl,
  };
}

export function loadBreedsSuccess(breedsObj) {
  return {
    type: LOAD_BREEDS_SUCCESS,
    breedsObj,
  };
}

export function loadBreedsError(error) {
  return {
    type: LOAD_BREEDS_ERROR,
    error,
  };
}

export function loadCurrentImgUrlSuccess(imgUrl, breedName, buttonsBreeds) {
  return {
    type: LOAD_CURRENT_IMG_URL_SUCCESS,
    imgUrl,
    breedName,
    buttonsBreeds,
  };
}

export function loadCurrentImgUrlError(error) {
  return {
    type: LOAD_CURRENT_IMG_URL_ERROR,
    error,
  };
}
