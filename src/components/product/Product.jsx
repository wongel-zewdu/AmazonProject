
import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import axios from "axios";
import Loder from "../Loder/Loder";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(`error: ${err}`);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div>
        <Loder />
      </div>
    );
  }
  return (
    <section className={classes.product__container}>
      {products.map((singleProduct) => {
        return <ProductCard key={singleProduct.id} product={singleProduct} />
      })}
        
      
    </section>
  );
};

export default Product;
