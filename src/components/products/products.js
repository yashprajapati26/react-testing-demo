import React, { useState } from "react";

export const Products = ({ products }) => {
  return (
    <div>
      <h1>products list</h1>
      <ul>
        {products.map((pro) => {
          return <li>{pro.title}</li>;
        })}
      </ul>
    </div>
  );
};
