"use client";
import React, { useState, useEffect } from "react";
interface IProp {
  value: number;
  setValue: (x: number) => void;
}

export const QuantityInput: React.FC<IProp> = ({ setValue }) => {
  const [quantity, setQuantity] = useState(1); // start from 1

  const increaseQTY = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQTY = () => {
    setQuantity((prev: number) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return 1;
      }
    });
  };
  useEffect(() => {
    setValue(quantity);
  }, [quantity, setValue]);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={decreaseQTY}
        className="px-3 py-1 bg-gray-200 text-lg rounded hover:bg-gray-300 transition"
      >
        -
      </button>

      <input
        type="number"
        value={quantity}
        readOnly
        className="w-12 text-center border border-gray-300 rounded"
      />

      <button
        onClick={increaseQTY}
        className="px-3 py-1 bg-gray-200 text-lg rounded hover:bg-gray-300 transition"
      >
        +
      </button>
    </div>
  );
};
