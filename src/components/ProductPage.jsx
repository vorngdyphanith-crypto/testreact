import React from "react";

import productData from "../data/data";

import { CardProduct } from "./cardProduct";

const ProductPage = () => {
  return (
    <>
      <table border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {productData.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.price}</td>
              <td>{value.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      {/* Card Product */}
      {productData.map((value, index) => (
        <CardProduct prop={value} key={index} />
      ))}
    </>
  );
};

export default ProductPage;