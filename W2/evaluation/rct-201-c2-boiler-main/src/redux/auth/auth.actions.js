// Auth Actions here
import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,RESET_AUTH
} from "./auth.types";
import axios from "axios";
export const login = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });
  try {
    const response = await axios.post("https://reqres.in/api/login", creds);
    dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: response.data });
    console.log(response.data);
  } catch (error) {
    dispatch({ type: AUTH_SIGN_IN_ERROR, payload: error.message });
    console.log(error.message);
  }
};
export const logout = () => ({ type: AUTH_SIGN_OUT });
