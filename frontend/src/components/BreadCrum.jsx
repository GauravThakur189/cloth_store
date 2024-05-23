

import React from "react";
import arrowIcon from "./assets/breadcrum_arrow.png"; // changed variable name to camelCase
import ProductDisplay from "./ProductDisplay";

const BreadCrum = ({ product }) => { 
    console.log(product);
  if (!product) return null; // added a check for product existence to avoid errors
  return (
    <div className=" flex items-center gap-2 text-gray-500  text-xl font-semibold my-14 mx-40">
      HOME <img src={arrowIcon} alt="arrow_icon" /> SHOP
      <img src={arrowIcon} alt="arrow_icon" />
      {product.category} <img src={arrowIcon} alt="arrow_icon" /> 
      {product.name} <img src={arrowIcon} alt="arrow_icon"/>
     
    </div>
  );
};

export default BreadCrum;

