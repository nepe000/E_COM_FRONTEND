/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/axios/api.axios";
import { ILogin } from "@/interface/auth/auth.interface";

export const login = async (data: ILogin) => {
  try {
    console.log("first", data);
    const response = await api.post("/user/login", data); //?end point , data
    console.log(response);

    return response.data;
  } catch (err: any) {
    throw err?.response?.data;
  }
};

export const register = async (data: any) => {
  try {
    console.log("first", data);
    const response = await api.post("/user", { ...data }); //?end point , data
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log("auth error", error);
    throw error?.response?.data;
  }
};
