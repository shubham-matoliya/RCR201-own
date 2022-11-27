import {
  GET_POST_ERROR,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
} from "./posts.actiontype";

const initialPosts = {
  loading: false,
  error: false,
  posts: [],
};

export const postsReducer = (state = initialPosts, { type, payload }) => {
  switch (type) {
    case GET_POST_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    }
    case GET_POST_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default: {
      return state;
    }
  }
};
