// actions.js: Contains both action creators and action types.
// Action Types
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SET_MOVIES = 'SET_MOVIES';
export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS';
export const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';
export const FETCH_GENRES = 'FETCH_GENRES';
export const SET_GENRES = 'SET_GENRES';

// Action Creators
export const fetchMovies = () => ({ type: FETCH_MOVIES });
export const setMovies = (movies) => ({ type: SET_MOVIES, payload: movies });
export const fetchMovieDetails = (id) => ({ type: FETCH_MOVIE_DETAILS, payload: id });
export const setMovieDetails = (details) => ({ type: SET_MOVIE_DETAILS, payload: details });
export const fetchGenres = () => ({ type: FETCH_GENRES });
export const setGenres = (genres) => ({ type: SET_GENRES, payload: genres });

// Combined Export
const combinedActions = {
    FETCH_MOVIES,
  SET_MOVIES,
  FETCH_MOVIE_DETAILS,
  SET_MOVIE_DETAILS,
  FETCH_GENRES,
  SET_GENRES,
  fetchMovies,
  setMovies,
  fetchMovieDetails,
  setMovieDetails,
  fetchGenres,
  setGenres,
};

export default combinedActions;