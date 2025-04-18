import axios from "axios";
import Cookies from "js-cookie";
const getToken = () => {
  return Cookies.get("access_token");
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 3000,
});

api.interceptors.request.use(
  function (config) {
    console.log("interceptor api", config);

    // Do something before request is sent
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
