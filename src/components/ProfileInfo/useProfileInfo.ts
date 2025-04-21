import { useNavigate } from "react-router-dom";


export interface ProfileDataType {
  username: string;
  image: string;
  location: string;
  email: string;
  phone: string;
}

export const useProfileInfo = () => {
  const ProfileDataString = localStorage.getItem("USER_DETAILS");
  const ProfileData: ProfileDataType | null = ProfileDataString 
    ? JSON.parse(ProfileDataString) 
    : null;
  const navigate = useNavigate();

  return { ProfileData, navigate };
};
