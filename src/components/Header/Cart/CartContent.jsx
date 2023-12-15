import React from "react";
import { CartItem } from "./CartItem";

const CartContent = () => {
  return (
    <div className="cart_content">
      <h1>Your Shopping Cart</h1>
      <div className="cart">
        <div className="cart_item_container">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cart_items_sub_total">
          <h3>Subtotal: $1100</h3>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
