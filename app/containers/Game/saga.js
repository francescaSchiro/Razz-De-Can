import { takeEvery, call, put } from 'redux-saga/effects';
import { without, sampleSize, shuffle } from 'lodash';

import request from 'utils/request';
import {
  HANDLE_GET_GAME_DATA,
  LOAD_BREEDS,
  HANDLE_RESET_GAME,
} from './constants';
import {
  loadBreedsSuccess,
  loadBreedsError,
  loadCurrentImgUrlSuccess,
  loadCurrentImgUrlError,
  resetGameSuccess,
  resetGameError,
} from './actions';

export function* getBreeds(action) {
  try {
    const breedsData = yield call(request, action.reqBreedsUrl);
    const breedsObj = breedsData.data.message;
    yield put(loadBreedsSuccess(breedsObj));
  } catch (err) {
    yield put(loadBreedsError(err));
  }
}

export function* getGameData(action) {
  try {
    const imgUrlObj = yield call(request, action.reqImgUrl);
    const imgUrl = imgUrlObj.data.message;
    const breedName = imgUrl.split('/')[4];
    const diffBreeds = without(action.breeds, breedName);
    const threeRandom = sampleSize(diffBreeds, 3);
    yield threeRandom.push(breedName);
    const buttonsBreeds = shuffle(threeRandom);
    yield put(loadCurrentImgUrlSuccess(imgUrl, breedName, buttonsBreeds));
  } catch (err) {
    yield put(loadCurrentImgUrlError(err));
  }
}

export function* resetGame(action) {
  try {
    const imgUrlObj = yield call(request, action.reqImgUrl);
    const imgUrl = imgUrlObj.data.message;
    const breedName = imgUrl.split('/')[4];
    const diffBreeds = without(action.breeds, breedName);
    const threeRandom = sampleSize(diffBreeds, 3);
    yield threeRandom.push(breedName);
    const buttonsBreeds = shuffle(threeRandom);
    yield put(resetGameSuccess(imgUrl, breedName, buttonsBreeds));
  } catch (err) {
    yield put(resetGameError(err));
  }
}

export default function* gameData() {
  yield takeEvery(LOAD_BREEDS, getBreeds);
  yield takeEvery(HANDLE_GET_GAME_DATA, getGameData);
  yield takeEvery(HANDLE_RESET_GAME, resetGame);
}
