import React, { useEffect, useState } from "react";
import classes from "./Result.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import ProductCard from "../../components/product/ProductCard";

const Result = () => {
  const [result, setResult] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log(`Error ${err.response.status}: ${err.response.data}`);
        } else {
          console.log(`Error: ${err.message}`);
        }
      });
  }, [categoryName]); // Added categoryName as a dependency

  return (
    <div className={classes.result__continer}>
      {result.map(
        (
          product // Fixed the variable name from 'producr' to 'product'
        ) => (
          <ProductCard key={product.id} product={product} /> // Fixed the key reference
        )
      )}
    </div>
  );
};

export default Result;
