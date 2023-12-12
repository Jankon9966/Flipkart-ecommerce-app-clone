import React from "react";
import {
  subHeader_Image_1,
  subHeader_Image_2,
  subHeader_Image_3,
  subHeader_Image_4,
  subHeader_Image_5,
  subHeader_Image_6,
  subHeader_Image_7,
  subHeader_Image_8,
} from "../SubHeader/index";

const SubHeader = () => {
  return (
    <div className="sub_header_container">
      <div className="image_box">
        <img src={subHeader_Image_1} alt="most popular" />
        <p>Top Sellers</p>
      </div>
      <div className="image_box">
        <img src={subHeader_Image_2} alt="most popular" />
        <p>Mobile & Tablets</p>
      </div>
      <div className="image_box">
        <img src={subHeader_Image_3} alt="most popular" />
        <p>Electronics</p>
      </div>
      <div className="image_box">
        <img src={subHeader_Image_4} alt="most popular" />
        <p>TV's & Appliances</p>
      </div>
      <div className="image_box">
        <img src={subHeader_Image_5} alt="most popular" />
        <p>Fashion</p>
      </div>
      <div className="image_box">
        <img src={subHeader_Image_6} alt="most popular" />
        <p>Home & Kitchen</p>
      </div>
      <div className="image_box">
        <img src={subHeader_Image_7} alt="most popular" />
        <p>Furniture</p>
      </div>
      <div className="image_box">
        <img src={subHeader_Image_8} alt="most popular" />
        <p>Grocery</p>
      </div>
    </div>
  );
};

export default SubHeader;
