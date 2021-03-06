/**
 * Gets the breedsObj from the Dog-Api
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { topFunction } from 'utils/helpers';

import {
  LOAD_BREEDS,
  LOAD_BREEDS_IMG_URL,
  LOAD_BREED_IMGS,
  LOAD_SELECTED_IMG,
} from './constants';
import {
  loadBreedsSuccess,
  loadBreedsError,
  loadBreedsImgUrlSuccess,
  // loadBreedsImgUrlError,
  loadBreedImgsSuccess,
  // loadBreedImgsError,
  loadSelectedImgSuccess,
} from './actions';
// import { makeSelectBreedName } from './selectors';

/**
 * DogBreeds(requestUrl) request/response handler
 */
export function* getBreeds(action) {
  // action.requestUrl to pass to request to load breeds object
  try {
    // Call our request helper (see 'utils/request)
    const breedsData = yield call(request, action.requestUrl);
    const breedsObj = breedsData.data.message;
    yield put(loadBreedsSuccess(breedsObj));
  } catch (err) {
    yield put(loadBreedsError(err));
  }
}
/**
 * SelectedDogBreed Img url (requestUrl) request/response handler
 */
export function* getSelectedDogData(action) {
  try {
    // Call our request helper (see 'utils/request)
    const ImgUrlObj = yield call(request, action.requestUrl);
    const breedsImgUrl = ImgUrlObj.data.message;
    yield put(
      loadBreedsImgUrlSuccess(breedsImgUrl, breedsImgUrl.split('/')[4]),
    );
  } catch (err) {
    console.log(err);
  }
}
/**
 * @name getBreedThumbs
 * @param {string} action.requestUrl : url to perform request to get breed images URLs for thumbnails
 */
export function* getBreedThumbs(action) {
  try {
    // Call our request helper (see 'utils/request)
    const breedImgsObj = yield call(request, action.requestUrl);
    const breedImgs = breedImgsObj.data.message;
    const selectedBreed = breedImgs[0].split('/')[4];
    yield put(loadBreedImgsSuccess(breedImgs, selectedBreed));
  } catch (err) {
    console.log(err);
  }
}
export function* handleUpdateDogImg(action) {
  try {
    yield put(loadSelectedImgSuccess(action.breedsImgUrl));
    yield put(topFunction());
  } catch (err) {
    console.log(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* DogBreeds() {
  yield takeLatest(LOAD_BREEDS, getBreeds);
  yield takeLatest(LOAD_BREEDS_IMG_URL, getSelectedDogData);
  yield takeLatest(LOAD_BREED_IMGS, getBreedThumbs);
  yield takeLatest(LOAD_SELECTED_IMG, handleUpdateDogImg);
}
