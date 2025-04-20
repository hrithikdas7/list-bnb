import { ProfileDataType, useProfileInfo } from "./useProfileInfo";
import ProductSkeleton from "../ProductSkelton/ProductSkelton";
import { EmailIcon, LocationIcon, PhoneIcon } from "../Icons/Icons";

const ProfileInfo = () => {
  const { ProfileData, isLoading, navigate } = useProfileInfo();
  console.log("ProfileData", ProfileData);

  if (isLoading) return <ProductSkeleton />;

  // Type assertion
  const profile = ProfileData?.data as ProfileDataType;

  return (
    <div className="flex items-start gap-4 mb-8">
      <img
        src={profile.image}
        alt={profile.username}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold">{profile.username}</h2>
        <p className="text-sm text-gray-500">Member since 2023</p>
        <div className="flex flex-col mt-2 text-sm text-gray-600">
          <div className="flex items-center gap-2 mt-1">
            <LocationIcon />
            <span>{profile.location}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <EmailIcon />
            <span>{profile.email}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <PhoneIcon />
            <span>{profile.phone}</span>
          </div>
        </div>
      </div>
      <button
        className="ml-auto px-4 py-1 border border-gray-300 rounded-md text-sm"
        onClick={() => navigate("/dashboard/profile")}
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileInfo;
