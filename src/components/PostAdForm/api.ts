import { AxiosError, AxiosResponse } from "axios";
import { getAxiosInstance } from "../../apis/getAxiosInstance";

export const PostAd = async (
  title: string,
  description: string,
  price: number,
  image: string
): Promise<AxiosResponse | AxiosError> => {
  try {
    const axiosInstance = await getAxiosInstance();
    const response = await axiosInstance.post("/api/advertisements", {
      title,
      description,
      price,
      image,
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError;
  }
};
