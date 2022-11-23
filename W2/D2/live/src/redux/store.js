import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
export let store = legacy_createStore(counterReducer);
