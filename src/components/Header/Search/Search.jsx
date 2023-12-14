import React, { useEffect, useState } from "react";
import searchIcon from "../../../assets/search_icon.svg.png";
import { options, fetchData } from "../../../utils/api";

const Search = () => {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const onChangeHandler = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (search) {
      const response = await fetchData(
        `https://real-time-amazon-data.p.rapidapi.com/search?query=${search}`,
        options
      );
      const data = response.data.products;
      const newData = data.map((product) => {
        return {
          product_title: product.product_title,
          product_price: product.product_price,
          product_image: product.product_photo,
          product_rating: product.product_star_rating,
          product_sales_volume: product.sales_volume,
        }
      })
      console.log(newData);
      setProducts(newData);
      setSearch("");
    }
  };

  return (
    <form className="search_form" onSubmit={onSubmitHandler} >
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
