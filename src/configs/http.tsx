import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { BASE_URL } from "constants/consts";

const token = window.localStorage.getItem("access_token");

const http: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Language": "en",
  },
});

http.interceptors.request.use((config: any) => {
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
      "Accept-Language": "en",
    };
  }
  return config;
});

http.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export function writeHeaders(token: string) {
  http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default http;
