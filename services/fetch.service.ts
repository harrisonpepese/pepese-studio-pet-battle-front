import axios from "axios";
import TokenService from "./token.service";

const fetcher = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

fetcher.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default fetcher;
