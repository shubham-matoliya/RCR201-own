import axios from "axios";
import {
  ADD_ITEM_TO_CART_SUCCESS,
  DECREASE_QUANTITY,
  GET_CART_ITEMS_SUCCESS,
  INCREASE_QUANTITY,
  REMOVE_CART_ITEMS_SUCCESS,
} from "./cart.types";

// Note: Do not update/change the initial state
const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_TO_CART_SUCCESS: {
      let item = { ...payload, quantity: 1 };
      let updatedCart = [...state.data, item];
      let count = updatedCart.reduce((total, el) => total + el.quantity, 0);
      return {
        ...state,
        data: updatedCart,
        count,
      };
    }
    case REMOVE_CART_ITEMS_SUCCESS: {
      let updatedCart = state.data.filter((el) => el.id != payload);
      let count = updatedCart.reduce((total, el) => total + el.quantity, 0);
      return {
        data: updatedCart,
        count,
      };
    }
    case INCREASE_QUANTITY: {
      let updatedCart = state.data.map((el) =>
        el.id === payload ? { ...el, quantity: el.quantity + 1 } : el
      );
      let count = updatedCart.reduce((total, el) => total + el.quantity, 0);
      return {
        data: updatedCart,
        count,
      };
    }
    case DECREASE_QUANTITY: {
      let updatedCart = state.data.map((el) =>
        el.id === payload ? { ...el, quantity: el.quantity - 1 } : el
      );
      let count = updatedCart.reduce((total, el) => total + el.quantity, 0);
      return {
        data: updatedCart,
        count,
      };
    }
    default:
      return state;
  }
};
