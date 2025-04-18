"use client";
import React from "react";
import Image from "next/image";
import { IProduct } from "@/interface/auth/product.interface";
import Link from "next/link";

interface IProp {
  product: IProduct;
}

const ProductCard: React.FC<IProp> = ({ product }) => {
  const { coverImage, price, name } = product;
  return (
    <div className="overflow-hidden tracking-wider border border-gray-300 w-fit rounded-md">
      {/* image */}
      <div className="h-50 w-60 aspect-square">
        <Image
          className="h-full w-full transition-all object-cover duration-300 hover:scale-[1.1]"
          height={1000}
          width={1000}
          src={
            coverImage
              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${coverImage}`
              : ""
          }
          alt={name}
        />
      </div>
      <div className="p-3">
        <p className="text-[15px]">{name}</p>
        <span className="text-[15px]">रु.{price.toLocaleString()}</span>
      </div>
      <Link href={`/product/${product._id}`}>
        <button className="cursor-pointer py-3 w-full text-[14px] bg-black text-white font-semibold">
          View Detail
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
