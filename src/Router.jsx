
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import SignUp from './pages/Auth/SignUp';
import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
import Cart from './pages/Cart/Cart';
import Results from "./pages/Results/Result"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<SignUp />} />
      <Route path="/payments" element={<Payment />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/category/:categoryName" element={<Results/>}/>
      <Route path="/products/:productId" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
