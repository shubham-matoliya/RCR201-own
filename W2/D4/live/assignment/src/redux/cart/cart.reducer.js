import {
  ADD_PRODUCT_TO_CART,
  DECREASE_PRODUCT_QUANTITY_IN_CART,
  DELETE_PRODUCT_FROM_CART,
  GET_PRODUCT_IN_CART,
  INCREASE_PRODUCT_QUANTITY_IN_CART,
} from "./cart.actiontype";

const initialCartState = {
  cartItems: JSON.parse(localStorage.getItem("temp-cartItems")) || [],
  subTotal: +localStorage.getItem("tempSubtotal") || 0,
};

export const cartReducer = (state = initialCartState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_CART: {
      const isPresent = state.cartItems.find((el) => payload.id === el.id);
      let updatedCart = [];
      if (isPresent) {
        updatedCart = state.cartItems.map((el) =>
          el.id === payload.id ? { ...el, quantity: el.quantity + 1 } : el
        );
        let subTotal = updatedCart.reduce(
          (total, el) => total + eval(el.quantity * el.price),
          0
        );
        localStorage.setItem("tempSubtotal", JSON.stringify(subTotal));
        localStorage.setItem("temp-cartItems", JSON.stringify(updatedCart));
        return {
          cartItems: updatedCart,
          subTotal,
        };
      } else {
        const updatedCart = [...state.cartItems, { ...payload, quantity: 1 }];
        let subTotal = updatedCart.reduce(
          (total, el) => total + eval(el.quantity * el.price),
          0
        );
        localStorage.setItem("tempSubtotal", JSON.stringify(subTotal));
        localStorage.setItem("temp-cartItems", JSON.stringify(updatedCart));

        return {
          cartItems: updatedCart,
          subTotal,
        };
      }
    }
    case INCREASE_PRODUCT_QUANTITY_IN_CART: {
      let updatedCart = state.cartItems.map((el) =>
        el.id === payload ? { ...el, quantity: el.quantity + 1 } : el
      );
      let subTotal = updatedCart.reduce(
        (total, el) => total + eval(el.quantity * el.price),
        0
      );
      localStorage.setItem("tempSubtotal", JSON.stringify(subTotal));
      localStorage.setItem("temp-cartItems", JSON.stringify(updatedCart));

      return {
        cartItems: updatedCart,
        subTotal,
      };
    }
    case DECREASE_PRODUCT_QUANTITY_IN_CART: {
      let updatedCart = state.cartItems.map((el) =>
        el.id === payload ? { ...el, quantity: el.quantity - 1 } : el
      );
      let subTotal = updatedCart.reduce(
        (total, el) => total + eval(el.quantity * el.price),
        0
      );
      localStorage.setItem("tempSubtotal", JSON.stringify(subTotal));
      localStorage.setItem("temp-cartItems", JSON.stringify(updatedCart));

      return {
        cartItems: updatedCart,
        subTotal,
      };
    }
    case DELETE_PRODUCT_FROM_CART: {
      let updatedCart = state.cartItems.filter((el) => el.id != payload);
      let subTotal = updatedCart.reduce(
        (total, el) => total + eval(el.quantity * el.price),
        0
      );
      localStorage.setItem("tempSubtotal", JSON.stringify(subTotal));
      localStorage.setItem("temp-cartItems", JSON.stringify(updatedCart));
      return {
        cartItems: updatedCart,
        subTotal,
      };
    }
    default: {
      return state;
    }
  }
};
