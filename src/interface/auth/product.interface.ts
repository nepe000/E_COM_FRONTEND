/* eslint-disable @typescript-eslint/no-explicit-any */
import { IReview } from "./auth.interface";
export interface IProduct {
  averageRating: number;
  name: string;
  coverImage: string;
  price: string;
  description?: string;
  images?: string[];
  createdBy?: any;
  _id: string;
  review: IReview[];
}
