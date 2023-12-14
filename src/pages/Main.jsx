import React, { useEffect, useState } from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import Slider from "../components/Slider/MainSlider";
import Products from "../components/Products/Products";

const Main = () => {
  return (
    <div>
      <div className="main_content">
        <SubHeader />
        <Slider />
        <div className="products">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Main;
