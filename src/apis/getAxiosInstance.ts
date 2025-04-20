import axios, { AxiosInstance } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

let token = "";
const API_KEY = import.meta.env.VITE_API_KEY;

export const getAxiosInstance = async (): Promise<AxiosInstance> => {
  try {
    token =
      localStorage.getItem("USER_ACCESS_TOKEN") ??
      sessionStorage.getItem("USER_ACCESS_TOKEN") ??
      "";
  } catch (e) {
    console.error("Token retrieval failed:", e);
  }

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      "x-api-key": API_KEY,
    },
  });

  instance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance;
};
