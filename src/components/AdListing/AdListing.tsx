import React from "react";

interface ListingProps {
  title: string;
  location: string;
  postedTime: string;
  price: string;
  imageUrl: string;
}

const AdListing: React.FC<ListingProps> = ({
  title,
  location,
  postedTime,
  price,
  imageUrl,
}) => (
  <div className="flex flex-col bg-white p-4 rounded-md mb-4 shadow-sm">
    <div className="flex justify-between items-start">
      <div className="flex gap-4">
        <img src={imageUrl} alt={title} className="w-16 h-16 rounded-md object-cover" />
        <div className="flex flex-col">
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{location} · {postedTime}</p>
          <p className="font-semibold mt-1">${price}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="px-3 py-1 bg-gray-50 text-gray-700 rounded-md text-sm">View</button>
        <button className="px-3 py-1 bg-pink-500 text-white rounded-md text-sm">Edit Ad</button>
      </div>
    </div>
  </div>
);

export default AdListing;
