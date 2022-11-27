import {
  GET_POST_ERROR,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
} from "./posts.actiontype";
import axios from "axios";
export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POST_LOADING });
  try {
    const response = await axios.get(`http://localhost:8080/posts`);
    console.log(response.data);
    dispatch({ type: GET_POST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_POST_ERROR, payload: error.message });
  }
};
