import React from "react";
import ProductsList from "../home/productslist";
const products = [
  {
    _id: "1",
    coverImage: "/speaker.png",
    name: "speaker",
    price: 250,
  },
  {
    _id: "2",
    coverImage: "/speaker.png",
    name: "speaker",
    price: 250,
  },
];

const SummerSale = () => {
  return (
    <div className="mt-10">
      <ProductsList title="Summer Sale" products={products} isLoading={false} />
    </div>
  );
};
export default SummerSale;
