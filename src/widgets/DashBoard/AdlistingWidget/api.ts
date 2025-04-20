import { getAxiosInstance } from "../../../apis/getAxiosInstance";

import { AxiosResponse } from "axios";

// Define the response structure (you can modify this if necessary)
interface DeleteAdvertisementResponse {
  message: string;
  status: number;
}

export const deleteAdvertisement = async (id: number) => {
  try {
    const axiosInstance = await getAxiosInstance();

    const response: AxiosResponse<DeleteAdvertisementResponse> =
      await axiosInstance.delete(`/api/advertisements/${id}`);

    console.log("Advertisement deleted successfully:", response.data);
    return response;
  } catch (error) {
    console.error("Error deleting advertisement:", error);
    return error;
  }
};
