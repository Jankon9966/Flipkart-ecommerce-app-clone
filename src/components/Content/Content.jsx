import React from "react";
import Header from "../Header/Header";
import Main from "../../pages/Main";
import { Routes, Route } from "react-router";
import CartContent from "../Header/Cart/CartContent";
import Footer from "../Footer/Footer";
import SingleProduct from "../Products/SingleProduct";

const Content = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<CartContent />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Content;
