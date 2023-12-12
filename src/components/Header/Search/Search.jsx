import React from "react";
import searchIcon from "../../../assets/search_icon.svg.png";

const Search = () => {
  return (
    <form className="search_form">
      <img
        src={searchIcon}
        alt="search icon"
        style={{ width: 24, height: 24 }}
      />
      <input type="text" placeholder="Search for Products, Brands and More" />
    </form>
  );
};

export default Search;
