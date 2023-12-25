import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/product-slice";
import { Link } from "react-router-dom";
import ProductsItem from "./ProductsItem";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loadingProducts = useSelector(
    (state) => state.product.isLoadingProducts
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loadingProducts) {
    return <h1>Loading products...</h1>;
  }

  return (
    <div>
      <h2 className="products_heading">Popular Products</h2>
      <div className="products_flex">
        {products.map((item) => {
          return (
            <ProductsItem
              key={item.id}
              title={item.title}
              image={item.images[0]}
              brand={item.brand}
              price={item.price}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
