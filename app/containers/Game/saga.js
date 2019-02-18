import { takeEvery, call, put } from 'redux-saga/effects';
import { without, sampleSize, shuffle } from 'lodash';

import request from 'utils/request';
import {
  HANDLE_GET_GAME_DATA,
  LOAD_BREEDS,
  HANDLE_BUTTON_SUBMIT_CLICK,
} from './constants';
import {
  loadBreedsSuccess,
  loadBreedsError,
  loadCurrentImgUrlSuccess,
  loadCurrentImgUrlError,
  handleWin,
  handleLoss,
} from './actions';

export function* checkWin(action) {
  if (action.currentBreed === action.el) {
    try {
      // const winnerButton = document.getElementById(action.el);
      // yield put(winnerButton.classList.add('win'));
      yield put(handleWin(action.el));
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      // const winnerButton = document.getElementById(action.currentBreed);
      // const currentButton = document.getElementById(action.el);
      // winnerButton.classList.add('win');
      // currentButton.classList.add('loss');
      yield put(handleLoss(action.el));
    } catch (err) {
      console.log(err);
    }
  }
}

//   return action.currentBreed === action.el
//     ?
//     : yield put(handleLoss(action.el));
// }

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
  // if didn't fetch breeds before do it now and dispatch actions to update state or handle error
  // if (action.breeds === []) {
  //   try {
  //     const breedsData = yield call(request, action.reqBreedsUrl);
  //     const breedsObj = breedsData.data.message;
  //     yield put(loadBreedsSuccess(breedsObj));
  //   } catch (err) {
  //     yield put(loadBreedsError(err));
  //   }
  //   // if we already have breeds array
  // } else {
  // get imgUrl and dispatch to update currentImgUrl and currentBreed
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
  // }
}

export default function* gameData() {
  yield takeEvery(LOAD_BREEDS, getBreeds);
  yield takeEvery(HANDLE_GET_GAME_DATA, getGameData);
  // yield takeEvery(HANDLE_BUTTON_SUBMIT_CLICK, checkWin);
}
