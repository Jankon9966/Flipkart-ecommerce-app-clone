import React from "react";
import logo from "../../assets/header_logo.svg";
import storeIcon from "../../assets/store_icon.svg";
import Search from "./Search/Search";
import Login from "./Login/Login";
import Cart from "./Cart/Cart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Header banner" />
      </Link>
      <Search />
      <Login />
      <Cart />
      <div className="become_seller">
        <button className="header_btn">
          <img src={storeIcon} alt="Store icon" />
          Become Seller
        </button>
      </div>
    </div>
  );
};

export default Header;
