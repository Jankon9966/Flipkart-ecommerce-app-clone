import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageSliderFirst from "../../assets/image_slider_1.webp";
import imageSliderSecond from "../../assets/image_slider_2.webp";
import imageSliderThrid from "../../assets/image_slider_3.webp";
import imageSliderFourth from "../../assets/image_slider_4.webp";
import imageSliderFive from "../../assets/image_slider_5.webp";

const MainSlider = () => {
  return (
    <div className="main_slider">
      <Slider
        autoplay={true}
        dots={true}
        arrows={false}
        infinite={true}
        speed={1000}
        slidesToShow={1}
        slidesToScroll={1}
      >
        <div className="slider_item">
          <img src={imageSliderFirst} alt="slider image" />
        </div>
        <div className="slider_item">
          <img src={imageSliderSecond} alt="slider image" />
        </div>
        <div className="slider_item">
          <img src={imageSliderThrid} alt="slider image" />
        </div>
        <div className="slider_item">
          <img src={imageSliderFourth} alt="slider image" />
        </div>
        <div className="slider_item">
          <img src={imageSliderFive} alt="slider image" />
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
