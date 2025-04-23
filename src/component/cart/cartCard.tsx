import React from "react";
import Image from "next/image";
import { deleteCart } from "@/api/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "@/interface/auth/product.interface";

interface CartItemCardProps {
  cartItem: {
    quantity: number;
    _id: string;
    product: IProduct;
  };
}

const CartItemCard: React.FC<CartItemCardProps> = ({ cartItem }) => {
  const queryClient = useQueryClient();

  const { mutate: removeFromCart, isPending } = useMutation({
    mutationFn: () => deleteCart(cartItem.product._id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return (
    <div className="flex border rounded-lg p-4 mb-4 shadow-sm">
      <div className="w-24 h-24 relative flex-shrink-0">
        {cartItem.product.coverImage && (
          <Image
            src={cartItem.product.coverImage}
            alt={cartItem.product.name}
            fill
            className="object-cover rounded-md"
          />
        )}
      </div>

      <div className="ml-4 flex-1">
        <h3 className="font-medium text-lg">{cartItem.product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {cartItem.product.description}
        </p>

        <div className="flex justify-between items-center mt-2">
          <div>
            <span className="font-bold">
              ${Number(cartItem.product.price).toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 ml-2">
              × {cartItem.quantity}
            </span>
          </div>

          <div className="flex items-center">
            <button
              className="px-3 py-1 bg-red-50 text-red-600 rounded-md text-sm hover:bg-red-100"
              onClick={() => removeFromCart()}
              disabled={isPending}
            >
              {isPending ? "Removing..." : "Remove"}
            </button>
          </div>
        </div>

        <div className="mt-2 text-right">
          <span className="font-bold">
            Total: $
            {(Number(cartItem.product.price) * cartItem.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
