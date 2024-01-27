import { combineReducers } from 'redux';

// Movies Reducer
const moviesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MOVIES':
        return action.payload;
      default:
        return state;
    }
  };
  
  // Movie Details Reducer
  const movieDetailsReducer = (state = { isLoading: false, data: null }, action) => {
    switch (action.type) {
      case 'FETCH_MOVIE_DETAILS':
        return { ...state, isLoading: true };
      case 'SET_MOVIE_DETAILS':
        return { ...state, isLoading: false, data: action.payload };
      default:
        return state;
    }
  };
  
  // Root Reducer
  const rootReducer = combineReducers({
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    // !add other reducers as needed
  });
  
  export default rootReducer;
  