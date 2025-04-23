"use client";
import React, { useEffect } from "react";
import ProductsList from "../home/productslist";
import { useQuery } from "@tanstack/react-query";
import { getTrendingProducts } from "@/api/product";
import toast from "react-hot-toast";

const TrendingProducts = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["trending products"],
    queryFn: getTrendingProducts,
  });
  console.log("trending", data);
  useEffect(() => {
    if (isError) {
      console.log(error?.message ?? "Something Went Wrong");
      toast.error(error?.message ?? "error occured");
    }
  }, [error, isError]);

  return (
    <div className="mt-10">
      <ProductsList
        title="Trendy Products"
        products={data?.data?.data?.data ?? []}
        isLoading={isPending}
      />
    </div>
  );
};
export default TrendingProducts;
