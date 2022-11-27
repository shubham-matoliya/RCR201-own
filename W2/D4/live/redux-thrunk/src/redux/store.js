import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { authReducer } from "./auth/auth.reducer";
import { feedsReducer } from "./feeds/feeds.reducer";
import { postsReducer } from "./posts/posts.reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  postsManager: postsReducer,
  feedsManager: feedsReducer,
  authManager: authReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);

// thunk is a middleware which is able to dispatch async functions
