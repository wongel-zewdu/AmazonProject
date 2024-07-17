
import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import axios from "axios";

import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(`error: ${err}`);
      });
  }, []);

  return (
    <section className={classes.product__container}>
      {products.map((singleProduct) => {
        return <ProductCard key={singleProduct.id} product={singleProduct} />
      })}
        
      
    </section>
  );
};

export default Product;
