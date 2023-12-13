import React, { useEffect, useState } from "react";
import { options, fetchData } from "../utils/api";
import SubHeader from "../components/SubHeader/SubHeader";
import Slider from "../components/Slider/MainSlider";

const Main = () => {

  return (
    <div>
      <div className="main_content">
        <SubHeader />
        <Slider />
        <div>
          <h2>products</h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
