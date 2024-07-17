// import React, { useEffect, useState } from "react";

// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/endPoint";
// import ProductCard from "../../components/product/ProductCard";

// const ProductDetail = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState();

//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/${productId}`)
//       .then((res) => {
//         setProduct(res.data);
//       })
//       .catch((err) => {
//         console.error(`Error fetching product: ${err}`);
//       });
//   }, []);

//   return (
//     <div>
//       <ProductCard product={product} />
//     </div>
//   );
// };

// export default ProductDetail;
// ****************************************
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/product/ProductCard";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product details. Please try again later.</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
};

export default ProductDetail;

