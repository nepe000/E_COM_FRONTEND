"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCart } from "@/api/cart";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import CartCard from "./cartCard";

const Cart = () => {
  const { isLoading, data } = useQuery({
    queryFn: getCart,
    queryKey: ["cart"],
  });
  console.log("cart", data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data?.data?.map((cartItem: any) => (
        <CartCard key={cartItem._id} item={cartItem} />
      ))}
    </div>
  );
};

export default Cart;
