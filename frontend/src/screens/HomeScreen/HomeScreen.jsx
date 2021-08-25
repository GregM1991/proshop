import React from "react";
import products from "../../products";

export const HomeScreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      {products.map((product) => (
        <div key={product.name}>{product.name}</div>
      ))}
    </div>
  );
};
