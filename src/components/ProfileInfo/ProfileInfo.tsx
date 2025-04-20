import React from "react";
import { useProfileInfo } from "./useProfileInfo";
import ProductSkeleton from "../ProductSkelton/ProductSkelton";

interface ProfileProps {
  name: string;
  memberSince: string;
  location: string;
  email: string;
  phone: string;
  avatarUrl: string;
}

const ProfileInfo: React.FC<ProfileProps> = () => {
  const { ProfileData, isLoading , navigate } = useProfileInfo()


  if(isLoading) return (
    <ProductSkeleton/>
  )

  return (
    <div className="flex items-start gap-4 mb-8">
      <img
        src={ProfileData?.image}
        alt={ProfileData?.username}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold">{ProfileData?.username}</h2>
        <p className="text-sm text-gray-500">Member since 2023</p>
        <div className="flex flex-col mt-2 text-sm text-gray-600">
          <div className="flex items-center gap-2 mt-1">
            <LocationIcon />
            <span>{ProfileData?.location}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <EmailIcon />
            <span>{ProfileData?.email}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <PhoneIcon />
            <span>{ProfileData?.phone}</span>
          </div>
        </div>
      </div>
      <button className="ml-auto px-4 py-1 border border-gray-300 rounded-md text-sm" onClick={()=> navigate("/dashboard/profile")}>
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileInfo;

const LocationIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);
