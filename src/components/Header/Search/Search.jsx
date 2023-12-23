import React, { useState } from "react";
import searchIcon from "../../../assets/search_icon.svg.png";
import { searchProducts } from "../../../utils/api";

const Search = () => {

  const [search, setSearch] = useState("");

  const onChangeHandler = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (search) {
      const searchDataProducts = async () => {
        try {
          const response = await searchProducts(search);
          const searched = response.filter((item) => {
            return item && item.title.toLowerCase().includes(search.toLowerCase());
          })
          console.log(searched);
        } catch (error) {
          console.log(error);
        }
      };
      searchDataProducts();
      setSearch("");
    }
  };

  return (
    <form className="search_form" onSubmit={onSubmitHandler}>
      <img
        src={searchIcon}
        alt="search icon"
        style={{ width: 24, height: 24 }}
      />
      <input
        type="text"
        placeholder="Search for Products, Brands and More"
        onChange={onChangeHandler}
        value={search}
      />
    </form>
  );
};

export default Search;
