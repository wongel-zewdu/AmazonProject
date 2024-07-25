
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Auth from "./pages/Auth/Auth";
import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
import Cart from './pages/Cart/Cart';
import Results from "./pages/Results/Result"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51PffFEC7kZJomXy4FCyhQVMI9EuXfGSrIlHcfjoPAiRoYXoBeDbzf2A5BrxZbvifQb9xNuYG6JRhve8hqYqqQwCS00brsMthNI"
);
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/payments"
        element={
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        }
      />
      <Route path="/orders" element={<Orders />} />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
