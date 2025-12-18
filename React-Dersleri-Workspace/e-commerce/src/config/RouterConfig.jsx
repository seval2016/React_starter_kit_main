import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductDetails from "../components/ProductDetails";
/*import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";*/

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
     {/* <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />*/}
      <Route path="*" element={<h2>Sayfa Bulunamadı</h2>} />
    </Routes>
  );
}

export default RouterConfig;
