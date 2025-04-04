import api from "@/axios/api.axios";
import { ILogin } from "@/interface/auth/auth.interface";

export const login = async (data: ILogin) => {
  console.log("first", data);
  const response = await api.post("/user/login", data); //?end point , data
  console.log(response);

  return response.data;
};
