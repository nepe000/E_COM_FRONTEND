"use client";

import { getCart } from "@/api/cart";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "@/context/auth.context";
import CartItemCard from "./cartCard";
import { IProduct } from "@/interface/auth/product.interface";

interface CartItem {
  _id: string;
  quantity: number;
  product: IProduct;
}

interface CartData {
  data: {
    items: CartItem[];
  };
}

const Cart = () => {
  const { user } = useAuth();

  const { isLoading, data, error } = useQuery<CartData, Error>({
    queryFn: getCart,
    queryKey: ["cart"],
    enabled: !!user,
  });

  if (!user) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-medium mb-2">
          Please log in to view your cart
        </h2>
        <p className="text-gray-500">
          You need to be logged in to view and manage your cart items.
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <div className="p-4 text-center">Loading your cart...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-500">
        There was an error loading your cart. Please try again.
      </div>
    );
  }

  const cartItems = data?.data?.items || [];

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
        <p className="text-gray-500">
          Browse our products and add something to your cart.
        </p>
      </div>
    );
  }

  // Calculate cart total with proper type handling
  const cartTotal = cartItems.reduce(
    (total, item) => total + Number(item.product.price) * item.quantity,
    0
  );

  const firstName = user.name ? user.name.split(" ")[0] : "there";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">Your Cart</h1>
      <p className="text-gray-600 mb-6">
        Hi {firstName}, here are your cart items:
      </p>

      <div>
        {cartItems.map((cartItem) => (
          <CartItemCard key={cartItem._id} cartItem={cartItem} />
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center text-lg">
          <span>Total</span>
          <span className="font-bold">${cartTotal.toFixed(2)}</span>
        </div>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
