/**
 * Gets the breedsObj from the Dog-Api
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { LOAD_BREEDS, LOAD_BREEDS_IMG_URL } from './constants';
import {
  loadBreedsSuccess,
  loadBreedsError,
  loadBreedsImgUrlSuccess,
  loadBreedsImgUrlError,
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
    yield put(loadBreedsImgUrlError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* DogBreeds() {
  // Watches for LOAD_IMG_URL actions and calls getDogData when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_BREEDS, getBreeds);
  yield takeLatest(LOAD_BREEDS_IMG_URL, getSelectedDogData);
}
