import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addProduct,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../../redux/cart/cart.actions";

const Product = ({ id, name, description, quantity, from }) => {
  // You can change this variable value to each product id
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  return (
    <div
      data-cy={`product-${id}`}
      id={id}
      style={{
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          padding: "15px",
        }}
      >
        <h3 data-cy="product-name">{name}</h3>
        <h6 data-cy="product-description">{description}</h6>
        <button
          data-cy="product-add-item-to-cart-button"
          disabled={added}
          onClick={() => {
            dispatch(addProduct({ id, name, description }));
            setAdded(!added);
          }}
          style={
            from != "products-page" ? { display: "none" } : { display: "block" }
          }
        >
          ADD TO CART
        </button>
      </div>
      <div
        style={
          from === "products-page" ? { display: "none" } : { display: "block" }
        }
      >
        <button
          data-cy="product-increment-cart-item-count-button"
          onClick={() => dispatch(increaseQuantity(id))}
        >
          +
        </button>
        <span data-cy="product-count">{quantity}</span>
        <button
          data-cy="product-decrement-cart-item-count-button"
          disabled={quantity === 1}
          onClick={() => dispatch(decreaseQuantity(id))}
        >
          -
        </button>
        <br />
        <button
          data-cy="product-remove-cart-item-button"
          onClick={() => dispatch(removeItem(id))}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default Product;
