import React, { useEffect } from "react";
import { getProducts } from "../redux/product/product.action";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
const Products = () => {
  const products = useSelector((store) => store.productManager.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="product-container">
      {products.map((el) => (
        <ProductCard
          key={el.id}
          id={el.id}
          image={el.outImage}
          title={el.cardDetails}
          price={el.price}
          product={el}
        />
      ))}
    </div>
  );
};

export default Products;
