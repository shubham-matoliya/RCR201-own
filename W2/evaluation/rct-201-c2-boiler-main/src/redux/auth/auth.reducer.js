// Note: Do not update/change the initial state
import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
  RESET_AUTH,
} from "./auth.types";
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case AUTH_SIGN_IN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,

        data: { token: payload.token, isAuthenticated: true },
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case AUTH_SIGN_OUT: {
      return {
        ...state,
        data: { token: "", isAuthenticated: false },
      };
    }
    default:
      return state;
  }
};
