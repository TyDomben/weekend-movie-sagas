// sagas.js: Contains all sagas
// Sagas are used to handle asynchronous tasks
import { all } from 'redux-saga/effects';

import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_MOVIE_DETAILS, SET_MOVIE_DETAILS } from './actions';

function* fetchMovieDetails(action) {
  try {
    const response = yield call(axios.get, `/api/details/${action.payload}`);
    yield put({ type: SET_MOVIE_DETAILS, payload: response.data });
  } catch (error) {
    console.error('Error fetching movie details:', error);
    // You would handle errors here, perhaps dispatching an error action
  }
}

function* watchFetchMovieDetails() {
  yield takeEvery(FETCH_MOVIE_DETAILS, fetchMovieDetails);
}

export default function* rootSaga() {
  yield all([
    watchFetchMovieDetails(),
    // You would add other watchers here if you had more sagas
  ]);
}

