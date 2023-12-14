import React, { useState } from "react";
import axios from "axios";

const ProductsByCategory = () => {
  const [categories, setCategories] = useState([]);

  const getProductCategory = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      const category = response.data;
      setCategories(category);
    } catch (error) {
      console.log(error);
    }
  };
  getProductCategory();

  return (
    <div className="products_category">
      <h2>Products by Category</h2>
      {categories.map((item, index) => {
        return <div key={index} className="categories">{item}</div>;
      })}
    </div>
  );
};

export default ProductsByCategory;
