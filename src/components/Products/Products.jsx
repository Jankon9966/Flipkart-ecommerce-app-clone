import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../utils/api";
import ProductsItem from "./ProductsItem";

const Products = () => {
  
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetchProducts();
      const data = response.products;
      const newData = data.map((product) => {
        return {
          id: product.id,
          title: product.title,
          image: product.images[0],
          price: product.price,
          brand: product.brand,
          category: product.category,
        };
      });
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
              brand={product.brand}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
