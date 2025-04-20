import { getAxiosInstance } from "../../apis/getAxiosInstance";

interface RegisterData {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }
  
  export const registerUser = async (data: RegisterData) => {
    try {
      const axiosInstance = await getAxiosInstance();
      const response = await axiosInstance.post("/api/auth/local/register", data);
      return response.data;
    } catch (error: any) {
      console.error("Registration failed:", error.response?.data || error.message);
      throw error;
    }
  };

  export const loginUser = async (username: string, password: string) => {
    try {
      const axiosInstance = await getAxiosInstance();
      const response = await axiosInstance.post("/api/auth/local", {
        identifier: username,
        password: password,
      });
      return response.data;
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
      throw error;
    }
  }
  