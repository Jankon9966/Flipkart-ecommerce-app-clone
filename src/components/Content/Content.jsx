import React from "react";
import Header from "../Header/Header";
import Main from "../../pages/Main";
import { Routes, Route } from "react-router";
import CartContent from "../Header/Cart/CartContent";
import Footer from "../Footer/Footer";
import SearchProduct from "../Products/SearchProduct";

const Content = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<CartContent />} />
        <Route path="/single-product" element={<SearchProduct />}>
          <Route path=":productId" element={<SearchProduct />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default Content;
