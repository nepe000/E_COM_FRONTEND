"use client";
import { getProductsById } from "@/api/product";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import ImageSlider from "./image-slider";
import { ProductDetail } from "./productdetail";
import ReviewForm from "@/component/Review/reviewForm";

import Reviews from "@/component/Review/review";

interface IProp {
  id: string;
}

const ProductDetailS: React.FC<IProp> = ({ id }) => {
  const { error, isError, isLoading, data } = useQuery({
    queryKey: ["get-product-by-id", id],
    queryFn: () => getProductsById(id),
  });

  useEffect(() => {
    if (isError) {
      toast.error(error?.message ?? "Something went wrong");
    }
  }, [error, isError]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="px-4 md:px-10 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
        {/* Image section - Adjusted to be smaller */}
        <div className="w-full md:w-[400px] flex-shrink-0">
          <div className="aspect-square bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <ImageSlider images={data?.data?.images ?? []} />
          </div>
        </div>

        {/* Product details */}
        <div className="flex-1">
          <ProductDetail product={data?.data} />
        </div>
      </div>

      {/* Review Form Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Write a Review
        </h3>
        <ReviewForm productId={id} />
      </div>

      <div className="ml-6 flex-wrap">
        <Reviews productId={id} />
      </div>
    </div>
  );
};

export default ProductDetailS;
