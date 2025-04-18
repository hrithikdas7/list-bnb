const ProductSkeleton = () => (
  <div className="bg-white border border-gray-200 rounded overflow-hidden animate-pulse">
    <div className="relative">
      <div className="w-full h-40 bg-gray-200" />
      <div className="absolute top-2 right-2 bg-gray-200 w-16 h-4 rounded" />
    </div>
    <div className="p-3">
      <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
        <div className="w-16 h-4 bg-gray-200" />
        <div className="w-16 h-4 bg-gray-200" />
      </div>
      <div className="w-24 h-4 bg-gray-200 mb-3" />
      <div className="flex justify-between items-center">
        <div className="w-12 h-4 bg-gray-200" />
        <div className="flex space-x-1">
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

export default ProductSkeleton;
