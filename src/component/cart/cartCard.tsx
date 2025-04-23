import { addToCart, deleteCart } from "@/api/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";

import { GoTrash } from "react-icons/go";
import Link from "next/link";

interface CartItem {
  _id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  coverImage?: string;
}

const CartCard: React.FC<{ item: CartItem }> = ({ item }) => {
  const queryClient = useQueryClient();

  const updateCartMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const deleteCartMutation = useMutation({
    mutationFn: deleteCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      updateCartMutation.mutate({
        ...item,
        quantity: newQuantity,
      });
    }
  };

  const handleDelete = () => {
    deleteCartMutation.mutate(item._id);
  };

  return (
    <div className="relative border p-4 rounded-lg shadow-md my-4">
      {/* Product Image */}
      <div className="h-36 w-36  rounded-md">
        <Image
          className="object-cover w-full h-full"
          src={
            item.coverImage
              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${item.coverImage}`
              : ""
          }
          alt={item.name}
          width={144}
          height={144}
        />
      </div>

      {/* Product Info */}
      <div className="p-3">
        <p className="font-semibold text-sm">{item.name}</p>
        <span className="text-gray-600 text-sm">
          रु.{item.price.toLocaleString()}
        </span>
      </div>

      {/* Quantity Input */}
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleQuantityChange}
        className="border mt-2 px-2 py-1 w-16 text-center"
      />

      {/* Remove Button */}
      <div className="absolute top-2 right-2 z-50">
        <GoTrash
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 cursor-pointer transition-all"
          size={22}
        />
      </div>

      {/* View Detail Link */}
      <Link href={`/product/${item.productId}`}>
        <button className="py-2 mt-2 w-full bg-black text-white text-sm font-semibold rounded-md">
          View Detail
        </button>
      </Link>
    </div>
  );
};

export default CartCard;
