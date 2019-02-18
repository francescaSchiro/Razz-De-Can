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
  HANDLE_BUTTON_SUBMIT_CLICK,
  HANDLE_WIN,
  HANDLE_LOSS,
} from './constants';

export function handleButtonSubmitClick(currentBreed, el) {
  return {
    type: HANDLE_BUTTON_SUBMIT_CLICK,
    currentBreed,
    el,
  };
}

export function handleWin(el) {
  return {
    type: HANDLE_WIN,
    el,
  };
}

export function handleLoss(el) {
  return {
    type: HANDLE_LOSS,
    el,
  };
}

export function handleGetGameData(reqImgUrl, reqBreedsUrl, breeds) {
  return {
    type: HANDLE_GET_GAME_DATA,
    reqImgUrl,
    reqBreedsUrl,
    breeds,
  };
}

export function loadBreeds(reqBreedsUrl) {
  return {
    type: LOAD_BREEDS,
    reqBreedsUrl,
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
