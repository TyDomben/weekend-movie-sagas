// store.js:

// Import the root reducer from the reducers/index.js file.
// Import the root saga from the sagas/index.js file.
// Set up the Redux store and saga middleware.
import rootReducer from './reducer/reducers'; // From the reducer subdirectory
import rootSaga from './sagas/sagas'; // From the sagas subdirectory
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
  rootReducer, // directly pass the root reducer
  applyMiddleware(sagaMiddleware, logger)
);

// ! this stays in the store
// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
