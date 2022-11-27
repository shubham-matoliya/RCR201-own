import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  RESET,
} from "./auth.actiontype";

const token = localStorage.getItem("token") || "";
const initialAuth = {
  loading: false,
  error: false,

  // isAuth: token ? true : false, if we only want boolean values then this can be written as (if string is empty this will give false if string is not empty this will give true)
  isAuth: !!token,
  token: token,
};

export const authReducer = (state = initialAuth, { type, payload }) => {
  switch (type) {
    case LOGIN_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: payload.token,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    }
    default: {
      return state;
    }
  }
};
