// hooks/useRecommendations.ts

import { useNavigate } from "react-router-dom";
import { useSwrStatic } from "../../apis/swr";
import { usePagination } from "../../helpers/usePagination";

interface Product {
  id: number;
  title: string;
  category: string;
  time: string;
  price: number;
  image: string;
  isHot?: boolean;
  owner: object;
  description: string;
}

export const useRecommendations = (itemsPerPage: number = 6) => {
  const { data: projectData, isLoading } = useSwrStatic(`/api/advertisements`);
  console.log("projectData", projectData);
  const products: Product[] = projectData?.data || [];

  const {
    currentItems: paginatedProducts,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
  } = usePagination(products, itemsPerPage);


  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleProductClick = (productId: number) => {
    // Navigate to the product details page using the product id
    navigate(`/advertisement/${productId}`);
  };

  return {
    isLoading,
    paginatedProducts,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    totalItems: products.length,
    handleProductClick
  };
};
