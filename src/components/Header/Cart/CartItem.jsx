import React from "react";
import image from "../../../assets/top_sellers.webp";

export const CartItem = () => {
  return (
    <div className="cart_item">
      <div className="cart_item_image">
        <img src={image} alt="cart item image" />
      </div>
      <h3 className="cart_item_name">Jacket</h3>
      <p className="cart_item_category">Men's clothing</p>
      <span className="quantity">3</span>
      <div className="buttons">
        <button className="add">+</button>
        <button className="remove">-</button>
      </div>
      <div className="cart_item_price">
        <p>Price:</p>
        <span>$200</span>
      </div>
    </div>
  );
};
