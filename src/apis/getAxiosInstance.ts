import axios, { AxiosInstance } from "axios";



const BASE_URL = import.meta.env.VITE_BASE_URL;
// cont BASE_URL = import.meta.env.REACT_APP_BASE_URL

console.log(BASE_URL)

let token = "";

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
