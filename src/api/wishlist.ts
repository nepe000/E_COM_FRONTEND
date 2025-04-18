/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/axios/api.axios";
export const addToWishlist = async (id: string) => {
  try {
    const response = await api.post(`/wishlist`, { productId: id });
    return response?.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
