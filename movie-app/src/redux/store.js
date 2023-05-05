import {
  legacy_createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import movieReducer from "./Movie/reducer";

export const store = legacy_createStore(movieReducer, applyMiddleware(thunk));
