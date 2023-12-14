import React, { useEffect, useState } from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import Slider from "../components/Slider/MainSlider";
import Products from "../components/Products/Products";
import bankImage from "../assets/marketing_1.webp";

const Main = () => {
  return (
    <div>
      <div className="main_content">
        <SubHeader />
        <Slider />
        <div className="banks">
          <img src={bankImage} alt="bank" />
        </div>
        <div className="products">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Main;
