import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

let store = createStore(reducer, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;
