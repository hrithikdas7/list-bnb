import AdCard from "../../../components/AdCard/AdCard";
import ProductSkeleton from "../../../components/ProductSkelton/ProductSkelton";
import { useAdlist } from "./useAdlist";

const AdListWidget = () => {
  const { userAds, isLoading, handleShowDetailAD, handleDeleteAD } =
    useAdlist();
  console.log("userAds", userAds);

  if(userAds?.length ===0 ) return <div className="text-center text-gray-500">No ads found.</div>;
  return (
    <>
      {!isLoading
        ? userAds.map((product) => (
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
              viewType="list" // Use "list" for list style
              onClickView={() => handleShowDetailAD(product.id)}
              onClickDelete={() => handleDeleteAD(product.id)}
            />
          ))
        : Array(6)
            .fill(0)
            .map((_, index) => <ProductSkeleton key={index} />)}
    </>
  );
};

export default AdListWidget;
