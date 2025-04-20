import { getAxiosInstance } from "../../../apis/getAxiosInstance";

import { AxiosResponse } from "axios";

interface DeleteAdvertisementResponse {
  message: string;
  status: number;
}

export const deleteAdvertisement = async (id: number) => {
  try {
    const axiosInstance = await getAxiosInstance();

    const response: AxiosResponse<DeleteAdvertisementResponse> =
      await axiosInstance.delete(`/api/advertisements/${id}`);
    return response;
  } catch (error) {
    console.error("Error deleting advertisement:", error);
    return error;
  }
};
