import React from "react";

const ProductsItem = (props) => {
  return (
    <div className="products_container">
      <h3 className="title">{props.title}</h3>
      <img src={props.image} alt={props.title} />
      <span className="category">{props.category}</span>
      <h4>
        Price: <span>${props.price}</span>
      </h4>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductsItem;
