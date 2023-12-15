import React, { useState } from "react";
import { CartItem } from "./CartItem";

const CartContent = () => {
  
  const [empty, setEmpty] = useState(true);

  if (!empty) {
    setEmpty(false);
  }

  return (
    <div className="cart_content">
      <h1>Your Shopping Cart</h1>
      <div className="cart">
        <div className="cart_item_container">
          {empty ? (
            <h2 className="empty">Your Flipkart Cart is empty</h2>
          ) : (
            <CartItem />
          )}
        </div>
        <div className="cart_items_sub_total">
          <h3>Subtotal: $0</h3>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
