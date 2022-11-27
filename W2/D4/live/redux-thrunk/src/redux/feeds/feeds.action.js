import {
  GET_FEEDS_ERROR,
  GET_FEEDS_LOADING,
  GET_FEEDS_SUCCESS,
} from "./feeds.actiontype";
import axios from "axios";
export const getFeeds = ()=> async (dispatch) => {
  dispatch({ type: GET_FEEDS_LOADING });
  try {
    const response = await axios.get(` http://localhost:8080/feeds`);
    console.log(response);
    dispatch({ type: GET_FEEDS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_FEEDS_ERROR, payload: error.message });
  }
};
