import React, { useEffect, useState } from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import Slider from "../components/Slider/MainSlider";
import Products from "../components/Products/Products";
import bankImage from "../assets/marketing_1.webp";
import cardFirst from "../assets/card_1.webp";
import cardSecond from "../assets/card_2.webp";
import cardThrid from "../assets/card_3.webp";

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
        <div className="cards">
          <div className="card_item">
            <img src={cardFirst} alt="card image" />
          </div>
          <div className="card_item">
            <img src={cardSecond} alt="card image" />
          </div>
          <div className="card_item">
            <img src={cardThrid} alt="card image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
