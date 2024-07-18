import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/product/ProductCard";
import Loder from "../../components/Loder/Loder";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(`Error fetching product: ${err}`);
        setError(err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <div>
        <Loder />
      </div>
    );
  }

  if (error) {
    return <div>Error loading product details. Please try again later.</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <ProductCard
        product={product}
        flex={true}
        renderDesc={true}
        renderAdd={false}
      />
    </div>
  );
};

export default ProductDetail;
