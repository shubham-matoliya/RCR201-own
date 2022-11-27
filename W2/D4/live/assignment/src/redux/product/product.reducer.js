import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from "./product.actiontype";

const initialProducts = {
  loading: false,
  error: false,
  products: [],
};
export const productReducer = (state = initialProducts, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: payload,
      };
    }
    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default: {
      return state;
    }
  }
};
