import React from "react";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import Slider from "../components/Slider/MainSlider";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="main_content">
        <SubHeader />
        <Slider />
      </div>
    </div>
  );
};

export default Main;
