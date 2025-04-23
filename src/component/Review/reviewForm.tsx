/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { RatingStar } from "../ui/ratingstars";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import reviewSchema from "@/schemas/review.schema";
import { IReview } from "@/interface/auth/auth.interface";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postReview, getProductReviews } from "@/api/review";
import toast from "react-hot-toast";

interface IProps {
  productId: string;
}

const ReviewForm: React.FC<IProps> = ({ productId }) => {
  const queryClient = useQueryClient();

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReview>({
    defaultValues: {
      rating: 1,
      review: "",
    },
    resolver: yupResolver(reviewSchema),
    mode: "all",
  });

  // const {} = useQuery({
  //   queryFn: () => getProductReviews(productId),
  //   queryKey: ["reviews", productId],
  // });

  const { isPending, mutate } = useMutation({
    mutationFn: postReview,
    mutationKey: ["reviews", productId],
    onSuccess(data: any) {
      console.log("Review submitted", data);
      queryClient.invalidateQueries({
        queryKey: ["reviews"],
      });
      toast.success(data?.message ?? "Review added successfully");
      reset();
    },
    onError: (err: any) => {
      const errorMessage =
        err?.response?.data?.message || err.message || "Review failed.";
      toast.error(errorMessage);
      console.error(err);
    },
  });

  const onSubmit: SubmitHandler<IReview> = (data) => {
    mutate({ ...data, productId });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <div>
                <RatingStar
                  editable={true}
                  rating={field.value}
                  onChange={field.onChange}
                />
                {errors.rating && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors.rating.message}
                  </p>
                )}
              </div>
            )}
          />
          <div>
            <textarea
              placeholder="Write review"
              className="p-2 rounded-md border border-blue-500 focus:outline-none min-h-[200px] w-[min(400px,100%)]"
              {...register("review")}
            />
            {errors.review && (
              <p className="text-red-500 mt-0 text-xs">
                {errors.review.message}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              disabled={isPending}
              className="cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-400 px-4 py-2 bg-blue-500 rounded-md text-center font-bold text-white tracking-wider"
            >
              {isPending ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
