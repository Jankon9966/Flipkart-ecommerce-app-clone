import React from "react";
import { profileIcon, ordersIcon, wishIcon, rewardsIcon } from "./index";

const DropDown = () => {
  return (
    <div className="drop_down">
      <div className="sign_up">
        <h3>New customer?</h3>
        <p>Sign Up</p>
      </div>
      <div className="drop_down_options">
        <div className="option_item">
            <img src={profileIcon} alt="Profile icon" />
            <p>My Profile</p>
        </div>
        <div className="option_item">
            <img src={ordersIcon} alt="Orders icon" />
            <p>Orders</p>
        </div>
        <div className="option_item">
            <img src={wishIcon} alt="Wishlist icon" />
            <p>Wishlist</p>
        </div>
        <div className="option_item">
            <img src={rewardsIcon} alt="Rewards icon" />
            <p>Rewards</p>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
