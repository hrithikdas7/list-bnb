import { useState } from "react";
import { useSwrStatic } from "../../apis/swr";

interface ProfileData {
  name: string;
  email: string;
  bio: string;
}

const useProfileEdit = () => {
  const { data: ProfileData, isLoading } = useSwrStatic(`/api/profile`);
  const [profile, setProfile] = useState<ProfileData>(ProfileData?.data);
  console.log(profile);

  return {
    profile,
    setProfile,
  };
};

export default useProfileEdit;
