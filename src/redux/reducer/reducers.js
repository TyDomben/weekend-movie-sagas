// reducers.js contains all the reducers for the application.
// Reducers are functions that take the current state and an action, and return the new state.
// We use the `switch` statement to handle different action types, and we use the `return` statement to return the new state.
// We use the `combineReducers` function to combine multiple reducers into a single root reducer.

import { combineReducers } from "redux";

// Movies Reducer
const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Movie Details Reducer
const movieDetailsReducer = (
  state = { isLoading: false, data: null },
  action
) => {
  switch (action.type) {
    case "FETCH_MOVIE_DETAILS":
      return { ...state, isLoading: true };
    case "SET_MOVIE_DETAILS":
      return { ...state, isLoading: false, data: action.payload };
    default:
      return state;
  }
};

// Used to store the movie genres
const genresReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Root Reducer
const rootReducer = combineReducers({
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
  genres: genresReducer,
  // !add other reducers as needed
});

export default rootReducer;
