import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.actiontype";
import axios from "axios";
export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    const response = await axios.post("https://reqres.in/api/login", creds);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    console.log(response.data);
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error.message });
    console.log(error.message);
  }
};
export const logout = () => ({ type: LOGOUT });

/*
    {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }
    {
    "token": "QpwL5tke4Pnpja7X4"
    }
*/
