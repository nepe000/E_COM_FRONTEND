/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import ProductCard from "../product/product-card";

interface IProp {
  title: string;
  products: any[];
  isLoading: boolean;
}

const ProductsList: React.FC<IProp> = ({
  title = "Most Sale",
  isLoading,
  products,
}) => {
  console.log(products);

  return (
    <div className="w-full px-4">
      <div className="w-full">
        <h1>{title}</h1>
      </div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && products.length > 0 && (
        <div className=" flex flex-wrap gap-5">
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
      {!isLoading && products.length === 0 && <p>No Data Found</p>}
    </div>
  );
};

export default ProductsList;
