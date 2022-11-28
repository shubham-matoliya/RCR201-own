// Product actions here
import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  RESET_PRODUCTS,
} from "./product.types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    const response = await axios.get(`http://localhost:7080/products`);
    console.log(response.data);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
  }
};
