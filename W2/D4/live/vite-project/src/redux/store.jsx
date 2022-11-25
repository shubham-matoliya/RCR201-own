import { legacy_createStore, combineReducers, compose } from "redux";
import { counterReducer } from "./counter/counter.reducer";
import { themeReducer } from "./theme/theme.reducer";
import { todosReducer } from "./todos/todos.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  todos: todosReducer,
});
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composer());
// copy window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ from console
// import compose from redux in store.js
