import PaginationControls from "../../components/Pagination/PaginationControls";
import ProductSkeleton from "../../components/ProductSkelton/ProductSkelton";
import { useRecommendations } from "./useRecommendations";

const Recommendations = () => {
  const {
    isLoading,
    paginatedProducts,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    totalItems,
    handleProductClick
  } = useRecommendations(6); // You can change the number of items per page here

  return (
    <div className="py-8 px-50 flex-grow bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <div className="text-sm text-pink-500 uppercase font-medium">
            WHAT'S NEW
          </div>
          <h2 className="text-2xl font-bold mb-6">Fresh Recommendations</h2>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-pink-500 font-medium">
            {totalItems} Items
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {!isLoading
            ? paginatedProducts.map((product) => (
                <div
                  key={product?.id}
                  className="bg-white border border-gray-200 rounded overflow-hidden cursor-pointer"
                  onClick={() => handleProductClick(product?.id)}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-cover"
                    />
                    {product.isHot && (
                      <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-medium py-1 px-2 rounded">
                        HOT
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
                      <span>{product.category}</span>
                      <span>{product.time}</span>
                    </div>
                    <h3 className="text-sm font-medium mb-3 line-clamp-2 h-10">
                      {product.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-pink-500">
                        ${product.price}
                      </div>
                      <div className="flex space-x-1">
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : Array(6)
                .fill(0)
                .map((_, index) => <ProductSkeleton key={index} />)}
        </div>

        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={prevPage}
          onNext={nextPage}
        />
      </div>
    </div>
  );
};

export default Recommendations;
