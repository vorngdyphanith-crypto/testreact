import React from "react";

export const CardProduct = ({ prop }) => {
  return (
    <>
      <div className="Card">
        <h5></h5>

        <div className="title">
          <h3>Name : {prop.name}</h3>
          <h2>Price : {prop.price}</h2>
          <span>Stock : {prop.stock}</span>
        </div>
      </div>
    </>
  );
};