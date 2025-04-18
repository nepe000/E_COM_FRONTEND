/* eslint-disable @typescript-eslint/no-unused-vars */

import api from "@/axios/api.axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const addToCart = async (data: {
  productId: string;
  quantity: number;
}) => {
  try {
    const response = await api.post("/cart/add", data);
  } catch (error: any) {
    throw error.response.data;
  }
};
