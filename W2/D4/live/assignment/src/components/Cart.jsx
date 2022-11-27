import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
} from "../redux/cart/cart.action";
const Cart = () => {
  const collection = useSelector((store) => store.cartItemManager);
  const { cartItems, subTotal } = collection;
  const dispatch = useDispatch();
  console.log(collection);
  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((el) => (
            <div>
              <div className="image-container">
                <img src={el.outImage} />
              </div>
              <div>
                <h3>{el.cardDetails}</h3>
                <div className="quantity">
                  <b>quantity:</b>
                  <button
                    disabled={el.quantity === 1}
                    onClick={() => dispatch(decreaseQuantity(el.id))}
                  >
                    -
                  </button>
                  <span>{el.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(el.id))}>
                    +
                  </button>
                </div>
                <p>
                  <b>Price:</b> Rs {el.price}
                </p>
              </div>
              <button
                className="delete"
                onClick={() => dispatch(deleteProduct(el.id))}
              >
                X
              </button>
            </div>
          ))
        ) : (
          <h1>No Items are there in Cart</h1>
        )}
      </div>
      <div className="subtotal">
        <h1>subTotal : {subTotal}</h1>
      </div>
    </div>
  );
};

export default Cart;
