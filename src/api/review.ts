/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/axios/api.axios";
interface IReview {
  rating: number;
  review: string;
  productId: string;
}

export const postReview = async (data: IReview) => {
  try {
    const response = await api.post(`/review`, data);
    console.log(response);
    return response;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getProductReviews = async (productID: string) => {
  try {
    const response = await api.get(`/review/${productID}`);
    console.log(response);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
