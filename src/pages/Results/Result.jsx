import React, { useEffect, useState } from "react";
import classes from "./Result.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import ProductCard from "../../components/product/ProductCard";
import Loder from "../../components/Loder/Loder";
const Result = () => {
  const [result, setResult] = useState([]);
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResult(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response) {
          console.log(`Error ${err.response.status}: ${err.response.data}`);
        } else {
          console.log(`Error: ${err.message}`);
        }
        setLoading(false);
      });
  }, [categoryName]);
  if (loading) {
    return (
      <div>
        <Loder />
      </div>
    );
  }
  return (
    <div className={classes.result__continer}>
      {result.map((product) => (
        <ProductCard key={product.id} product={product}  />
      ))}
    </div>
  );
};

export default Result;
