import { useParams } from "react-router-dom";
import { useSwrStatic } from "../../apis/swr";

export const useAdDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useSwrStatic(`/api/advertisements/${id}`);

  return {
    AdDetailData: data?.data,
    isLoading,
  };
};
