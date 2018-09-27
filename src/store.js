import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialState = {};

const middelware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middelware)
);

export default store;
