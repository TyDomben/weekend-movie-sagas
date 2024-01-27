// actions.js: Contains both action creators and action types.
// Action Types
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SET_MOVIES = 'SET_MOVIES';
export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS';
export const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';

// Action Creators
export const fetchMovies = () => ({ type: FETCH_MOVIES });
export const setMovies = (movies) => ({ type: SET_MOVIES, payload: movies });
// for expansion

