import React from "react";

const ProductsItem = (props) => {
  return (
    <div className="products_container">
      <h3 className="title">{props.title}</h3>
      <img src={props.image} alt={props.title} />
      <span>{props.category}</span>
      <h4>{props.price}</h4>
      <div className="ratings">
        <span>{props.rating.count}</span>
        <span>{props.rating.rate}</span>
      </div>
    </div>
  );
};

export default ProductsItem;
