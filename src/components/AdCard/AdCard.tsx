import React from "react";
import { ThreeDotICon } from "../Icons/Icons";

interface AdCardProps {
  id: number;
  title: string;
  location?: string;
  postedTime: string;
  price: number;
  imageUrl: string;
  category?: string;
  isHot?: boolean;
  viewType?: "grid" | "list";
  onClickView?: (id: number) => void;
  onClickDelete?: (id: number) => void;
}

const AdCard: React.FC<AdCardProps> = ({
  id,
  title,
  location,
  postedTime,
  price,
  imageUrl,
  category,
  isHot,
  viewType = "grid",
  onClickView,
  onClickDelete,
}) => {
  if (viewType === "list") {
    return (
      <div className="flex flex-col bg-white p-4 rounded-md mb-4 shadow-sm">
        <div className="flex justify-between items-start">
          <div className="flex gap-4">
            <img
              src={imageUrl}
              alt={title}
              className="w-16 h-16 rounded-md object-cover"
            />
            <div className="flex flex-col">
              <h3 className="font-medium text-gray-800">{title}</h3>
              <p className="text-sm text-gray-500">
                {location} · {postedTime}
              </p>
              <p className="font-semibold mt-1">${price}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 bg-gray-50 text-gray-700 rounded-md text-sm"
              onClick={() => onClickView?.(id)}
            >
              View
            </button>
            <button
              className="px-3 py-1 bg-pink-500 text-white rounded-md text-sm"
              onClick={() => onClickDelete?.(id)}
            >
              Delete Ad
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onClickView?.(id)}
      className="bg-white border border-gray-200 rounded overflow-hidden cursor-pointer"
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
        {isHot && (
          <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-medium py-1 px-2 rounded">
            HOT
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
          <span>{category}</span>
          <span>{postedTime}</span>
        </div>
        <h3 className="text-sm font-medium mb-3 line-clamp-2 h-10">{title}</h3>
        <div className="flex justify-between items-center">
          <div className="font-bold text-pink-500">${price}</div>
          <div className="flex space-x-1">
            <button className="text-gray-400 hover:text-gray-600">
              <ThreeDotICon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
