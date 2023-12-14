import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsItem from "./ProductsItem";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      const newData = data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          category: item.category,
          price: item.price,
          image: item.image,
          rating: item.rating,
          description: item.description,
        };
      });
      console.log(newData);
      setProducts(newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2 className="products_heading">Popular Products</h2>
      <div className="products_flex">
        {products.map((product) => {
          return (
            <ProductsItem
              key={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
              image={product.image}
              rating={product.rating}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
