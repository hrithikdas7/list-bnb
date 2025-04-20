import { getAxiosInstance } from "../../apis/getAxiosInstance";
import { AxiosError, AxiosResponse } from "axios"; // Import AxiosError type

interface RegisterData {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface AuthResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

export const registerUser = async (
  data: RegisterData
): Promise<AxiosResponse | AxiosError> => {
  try {
    const axiosInstance = await getAxiosInstance();
    const response = await axiosInstance.post<AuthResponse>(
      "/api/auth/local/register",
      data
    );
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<{
      message?: string;
      error?: {
        message: string;
      };
    }>;

    console.error(
      "Registration failed:",
      axiosError.response?.data?.error?.message ||
        axiosError.response?.data?.message ||
        axiosError.message
    );
    return axiosError;
  }
};

export const loginUser = async (
  username: string,
  password: string
): Promise<AxiosResponse | AxiosError> => {
  try {
    const axiosInstance = await getAxiosInstance();
    const response = await axiosInstance.post<AuthResponse>("/api/auth/local", {
      identifier: username,
      password: password,
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<{
      message?: string;
      error?: {
        message: string;
      };
    }>;

    console.error(
      "Login failed:",
      axiosError.response?.data?.error?.message ||
        axiosError.response?.data?.message ||
        axiosError.message
    );
    return axiosError;
  }
};
