import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/product/product.actions";
import Product from "./Product/Product";

const Products = () => {
  const products = useSelector((store) => store.productManager.data);
  const dispatch = useDispatch();
  console.log("products fetched are: ", products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <h1>Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            from = "products-page"
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
/*
 <div
            id={product.id}
            style={{
              padding: "15px",
              border: "1px solid gray",
              borderRadius: "10px",
            }}
          >
            <p>
              <b>Name: </b>
              {product.name}
            </p>
            <p>
              <b>Description: </b>
              {product.description}
            </p>
            <button>ADD TO CART</button>
          </div>
*/
