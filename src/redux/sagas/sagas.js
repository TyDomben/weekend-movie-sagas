// sagas.js contains all the sagas for the application.
// Sagas are functions that are triggered by actions, and they can perform asynchronous tasks.
// They are used to handle side effects, such as fetching data from an API or saving data to a database.
// We use the `all` effect to run multiple sagas concurrently.
// We use the `takeEvery` effect to listen for a specific action type, and then run the saga function when that action is dispatched.
// We use the `put` effect to dispatch an action to the store.
// We use the `call` effect to call a function, and it returns the result of that function.

import { all, takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
//combined actions from ../actions/actions.js
import combinedActions from "../actions/actions";

function* fetchAllMovies() {
  try {
    const moviesResponse = yield call(axios.get, "/api/movies");
    yield put({
      type: combinedActions.SET_MOVIES,
      payload: moviesResponse.data,
    });
  } catch (error) {
    console.log("fetchAllMovies error:", error);
  }
}

function* fetchMovieDetails(action) {
  try {
    const response = yield call(axios.get, `/api/details/${action.payload}`);
    yield put({
      type: combinedActions.SET_MOVIE_DETAILS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(combinedActions.FETCH_MOVIES, fetchAllMovies),
    takeEvery(combinedActions.FETCH_MOVIE_DETAILS, fetchMovieDetails),
  ]);
}
