import { useNavigate } from "react-router-dom";
import { useSwrStatic } from "../../../apis/swr";
import { deleteAdvertisement } from "./api";
import { toast } from "react-toastify";

// Define the type for the owner more specifically
interface Owner {
  id: number;
}

interface Product {
  id: number;
  title: string;
  category: string;
  time: string;
  price: number;
  image: string;
  isHot?: boolean;
  owner: Owner;
  description: string;
}

export const useAdlist = () => {
  const navigate = useNavigate();

  // Use proper types for `useSwrStatic`
  const {
    data: projectData,
    isLoading,
    mutate,
  } = useSwrStatic<{ data: Product[] }>("/api/advertisements"); // Ensuring that `data` is an array of Product

  const products = (projectData?.data ?? []) as Product[];

  // Logged-in user
  const userId = localStorage.getItem("USER_ID") || "0";

  // Filter only logged-in user's ads
  const userAds = products?.filter((ad) => ad.owner?.id === Number(userId));
  console.log("userAds", userAds);

  const handleShowDetailAD = (productId: number) => {
    navigate(`/advertisement/${productId}`);
    console.log("Product clicked:", productId);
  };

  const handleDeleteAD = async (productId: number) => {
    const result = await deleteAdvertisement(productId);
    console.log("Delete result:", result);

    if (result instanceof Error) {
      toast.error(`Failed to delete advertisement. Please try again.`);
    } else {
      toast.success("Advertisement deleted successfully!");
      mutate(); // Assuming mutate re-fetches the list of ads
    }
  };

  return { isLoading, userAds, handleShowDetailAD, handleDeleteAD };
};
