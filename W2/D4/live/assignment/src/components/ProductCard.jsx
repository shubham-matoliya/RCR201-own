import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../redux/cart/cart.action";

const ProductCard = ({ image, price, id, title, product }) => {
  const products = useSelector((store) => store.productManager.products);
  const dispatch = useDispatch();

  return (
    <div id={id} className="product-card">
      <div>
        <img src={image} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>Rs {price}</p>
        <button
          onClick={() => {
            dispatch(addProductToCart(product));
            console.log("clicked");
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
