import { legacy_createStore, compose } from "redux";
import { todoReducer } from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(todoReducer, composeEnhancer());
// copy window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ from console
// import compose from redux in store.js
