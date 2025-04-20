import { useNavigate } from "react-router-dom";
import { useSwrStatic } from "../../apis/swr";

export interface ProfileDataType {
  username: string;
  image: string;
  location: string;
  email: string;
  phone: string;
}

export const useProfileInfo = () => {
  const { data: ProfileData, isLoading } = useSwrStatic(`/api/profile`);
  const navigate = useNavigate();

  return { ProfileData, isLoading, navigate };
};
