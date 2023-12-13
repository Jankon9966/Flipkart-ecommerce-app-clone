import React from "react";
import Header from "../Header/Header";
import Main from "../../pages/Main";
import { Routes, Route } from "react-router";
import CartContent from "../Header/Cart/CartContent";

const Content = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<CartContent />} />
      </Routes>
    </div>
  );
};

export default Content;
