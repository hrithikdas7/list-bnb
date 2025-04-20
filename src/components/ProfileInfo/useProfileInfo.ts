import { useNavigate } from "react-router-dom";
import { useSwrStatic } from "../../apis/swr";

export const useProfileInfo = () => {
  const { data: ProfileData, isLoading } = useSwrStatic(`/api/profile`);
  const navigate = useNavigate();

  return { ProfileData: ProfileData?.data, isLoading, navigate };
};
