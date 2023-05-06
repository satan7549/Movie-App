import { legacy_createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./Movie/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  movieReducer,
  composeEnhancer(applyMiddleware(thunk))
);
