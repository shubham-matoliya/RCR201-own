import {
  GET_FEEDS_ERROR,
  GET_FEEDS_LOADING,
  GET_FEEDS_SUCCESS,
} from "./feeds.actiontype";

const initialFeeds = {
  loading: false,
  error: false,
  feeds: [],
};

export const feedsReducer = (state = initialFeeds, { type, payload }) => {
  switch (type) {
    case GET_FEEDS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_FEEDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        feeds: payload,
      };
    }
    case GET_FEEDS_ERROR: {
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
