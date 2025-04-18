/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { IProduct } from "@/interface/auth/product.interface";
import ProductTitle from "./producttitle";
import { QuantityInput } from "@/component/ui/quantity-input";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { addToCart } from "@/api/cart";
import { addToWishlist } from "@/api/wishlist";

import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

interface IProps {
  product: IProduct;
}

export const ProductDetail: React.FC<IProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const {
    error,
    isError,
    data,
    mutate: addToCartMutation,
    isPending: addToCartPending,
  } = useMutation({
    mutationFn: addToCart,
    mutationKey: ["add-to-cart"],
    onSuccess(data: any) {
      console.log("add to cart", data);
      toast.success(data?.data?.message ?? "Added to cart");
    },
    onError: (err: Error) => {
      toast.error(err?.message ?? "Add to cart failed");
      console.log(err);
    },
  });
  const addProductToCart = () => {
    addToCartMutation({ productId: product._id, quantity });
  };
  // wishlist
  const { mutate: addToWishlistMutation, isPending: addToWishlistPending } =
    useMutation({
      mutationFn: addToWishlist,
      mutationKey: ["add-to-wishlist"],
      onSuccess(data: any) {
        console.log("add to wishlist", data);
        toast.success(data?.data?.message ?? "Added to wishlist");
      },
      onError: (err: Error) => {
        toast.error(err?.message ?? "Add to wishlist failed");
        console.log(err);
      },
    });
  const addProductToWishlist = () => {
    addToWishlistMutation(product._id);
  };

  return (
    <div>
      <div>
        <ProductTitle name={product.name} rating={product.averageRating} />
        <p className="text-[18px] tracking-wider mt-6">
          रु.{" "}
          <span className="text-blue-500 font-extrabold">{product.price}</span>
        </p>
        <div className="mt-10">
          <QuantityInput value={quantity} setValue={setQuantity} />
        </div>
        <div className="flex gap-10 mt-6 w-full">
          <button
            onClick={addProductToCart}
            disabled={addToCartPending}
            className="px-4 py-2.5 w-1/2 md:max-w-[300px] cursor-pointer text-lg font-bold tracking-wider bg-blue-500 text-white rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
          >
            <FaCartPlus className="w-5 h-5" />
            Add to Cart
          </button>
          <button
            onClick={addProductToWishlist}
            disabled={addToWishlistPending}
            className="px-4 py-2.5 w-1/2 md:max-w-[300px] cursor-pointer text-lg font-bold tracking-wider text-blue-400 border border-blue-400 rounded-md flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
          >
            <FaHeart className="w-5 h-5" />
            Add to WishList
          </button>
        </div>

        {/* Description */}
        <div className="mt-10 tracking-wider">
          <h1 className="font-bold mb-2 text-xl">Description</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
};
