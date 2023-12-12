import React from "react";
import cartIcon from "../../../assets/header_cart.svg";

const Cart = () => {
  return <div className="cart">
    <button className="header_btn">
      <img src={cartIcon} alt="Cart icon" />
      Cart
    </button>
  </div>;
};

export default Cart;
