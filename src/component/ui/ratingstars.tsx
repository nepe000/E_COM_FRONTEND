"use client";
import { StarRating } from "react-flexible-star-rating";
import React from "react";

interface IProp {
  rating?: number;
  onChange?: (rating: number) => void;
  editable?: boolean;
}

export const RatingStar: React.FC<IProp> = ({
  rating = 0,
  onChange,
  editable = false,
}) => {
  return (
    <div className="w-[150px] h-[50px] flex">
      <StarRating
        dimension={8}
        isReadOnly={!editable}
        initialRating={rating}
        onRatingChange={(value: number) => {
          if (editable && onChange) {
            onChange(value);
          }
        }}
      />
    </div>
  );
};
