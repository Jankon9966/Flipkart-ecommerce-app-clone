import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../../assets/header_cart.svg";

const Cart = () => {
  /*
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {

    if (!showCart) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  } */

  return (
    <div className="cart">
      <Link to="/cart">
      <button className="header_btn">
        <img src={cartIcon} alt="Cart icon" />
        Cart
      </button>
      </Link>  
    </div>
  );
};

export default Cart;
