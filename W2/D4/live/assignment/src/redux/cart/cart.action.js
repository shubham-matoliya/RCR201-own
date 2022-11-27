import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  GET_PRODUCT_IN_CART,
  INCREASE_PRODUCT_QUANTITY_IN_CART,
  DECREASE_PRODUCT_QUANTITY_IN_CART,
} from "./cart.actiontype";

export const getProductInCart = () => ({ type: GET_PRODUCT_IN_CART });
export const addProductToCart = (item) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: item,
});
export const increaseQuantity = (id) => ({
  type: INCREASE_PRODUCT_QUANTITY_IN_CART,
  payload: id,
});
export const decreaseQuantity = (id) => ({
  type: DECREASE_PRODUCT_QUANTITY_IN_CART,
  payload: id,
});
export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: id,
});
