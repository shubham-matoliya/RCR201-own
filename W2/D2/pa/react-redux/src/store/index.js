import { legacy_createStore } from "redux";
const reducerFn = (state = { counter: 0 }, action) => {};
const store = legacy_createStore(reducerFn);
export default store