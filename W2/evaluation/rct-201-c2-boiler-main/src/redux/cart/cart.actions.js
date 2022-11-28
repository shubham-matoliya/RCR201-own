// Cart Actions here
import {
  ADD_ITEM_TO_CART_SUCCESS,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_CART_ITEMS_SUCCESS,
} from "./cart.types";

export const addProduct = (item) => ({
  type: ADD_ITEM_TO_CART_SUCCESS,
  payload: item,
});

export const removeItem = (id) => ({
  type: REMOVE_CART_ITEMS_SUCCESS,
  payload: id
});

export const increaseQuantity = (id) => ({
  type: INCREASE_QUANTITY,
  payload: id
});
export const decreaseQuantity = (id) => ({
  type: DECREASE_QUANTITY,
  payload: id
});
