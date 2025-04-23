"use client";

import { getWishlist } from "@/api/wishlist";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "../product/product-card";
import { IProduct } from "@/interface/auth/product.interface";

const WishList = () => {
  const { isLoading, data } = useQuery({
    queryFn: getWishlist,
    queryKey: ["wishlist"],
  });
  console.log("wishlist", data);
  if (isLoading) {
    return <div>LOading....</div>;
  }

  return (
    <div className="px-10 ">
      <div>
        {data?.data?.map((product: IProduct) => (
          <ProductCard key={product._id} wishlist={true} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WishList;
