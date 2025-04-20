import { getAxiosInstance } from "../../apis/getAxiosInstance";

export const PostAd = async (
  title: string,
  description: string,
  price: number,
  image: string
) => {
  try {
    const axiosInstance = await getAxiosInstance();
    const response = await axiosInstance.post("/api/advertisements", {
      title,
      description,
      price,
      image,
    });
    return response;
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
    return error;
  }
};
