/**
 * Gets the imgUrl from the Dog-Api
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { LOAD_IMG_URL } from './constants';
import { loadImgUrlSuccess, loadImgUrlError } from './actions';
// import { makeSelectBreedName } from './selectors';

/**
 * DogData(imgUrl, breedName) request/response handler
 */
export function* getDogData(action) {
  // select breedName from store for when I select the breed and want the picture?       TODO: better to make another getSpecificDogData() saga
  //   const breedName = yield select(makeSelectBreedName());
  //   const requestURL = `https://dog.ceo/api/breed/${breedName}/images/random`;

  const requestURL = action.requestUrl;

  try {
    // Call our request helper (see 'utils/request)
    const imgUrl = yield call(request, requestURL);
    yield put(
      loadImgUrlSuccess(imgUrl.data.message, imgUrl.data.message.split('/')[4]),
    );
  } catch (err) {
    yield put(loadImgUrlError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* DogData() {
  // Watches for LOAD_IMG_URL actions and calls getDogData when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_IMG_URL, getDogData);
}
