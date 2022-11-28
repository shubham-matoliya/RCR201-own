import React from "react";
import { useSelector } from "react-redux";
import { Product } from "../components/Products/Product";
import { store } from "../redux/store";
const CartItems = () => {
  const cartItems = useSelector((store) => store.cartManager.data);
  console.log(cartItems);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "30px",
      }}
    >
      {cartItems.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          from="cart-page"
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default CartItems;
