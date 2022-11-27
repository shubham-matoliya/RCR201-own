import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from "./product.actiontype";
import axios from "axios";
export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOADING });
  try {
    const response = await axios.get(`http://localhost:9080/products`);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_ERROR, payload: error.message });
  }
};
