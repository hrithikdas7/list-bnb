import AdCard from "../../components/AdCard/AdCard";
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
    handleProductClick,
  } = useRecommendations(8); // You can change the number of items per page here

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
                <AdCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  // location={product?.location}
                  postedTime={product.time}
                  price={product.price}
                  imageUrl={product.image}
                  category={product.category}
                  isHot={product.isHot}
                  viewType="grid"
                  onClickView={handleProductClick}
                />
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
