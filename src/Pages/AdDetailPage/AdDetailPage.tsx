import ProductSkeleton from "../../components/ProductSkelton/ProductSkelton";
import { useAdDetailPage } from "./useAdSetailPage";

interface AdDetailDataType {
  title: string;
  location: string;
  last_updated: string;
  image: string;
  overview: string;
}

const AdDetailPage = () => {
  const { AdDetailData, isLoading } = useAdDetailPage();
  // Type assertion
  const detail = AdDetailData as AdDetailDataType;
  if (isLoading) return <ProductSkeleton />;
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        {/* Listing Details */}
        <div className="w-full md:w-2/3">
          {/* Listing Card */}
          <div className="border border-purple-300 rounded-lg p-4">
            <h1 className="text-xl font-semibold">{detail?.title}</h1>

            <div className="flex items-center text-sm text-gray-500 mt-1 mb-4 space-x-4">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  {detail?.location ?? `New York, United States`}
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  {detail?.last_updated ?? `Nov 01, 2023, 10:00am`}
                </span>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative">
              <img
                src={detail?.image}
                alt="No image found"
                className="max-w-1/3 rounded-lg object-cover"
              />

            </div>
          </div>

          {/* Overview Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                {detail?.overview ??
                  `The Apple MacBook Air 13.6-inch laptop is powered by the new M2
                chip. It is loaded with 8GB RAM and 256GB SSD. The MacBook Air
                features a brilliant Retina display, a FaceTime HD camera, and
                studio-quality mics. It comes with the same compact design but
                now it supports up to 20 hours of battery life and an active
                cooling system to sustain enhanced performance. macOS and M2
                work together to bring more speed and responsiveness to all your
                go-to apps. The Apple MacBook Air comes with active cooling that
                enables blazing-fast performance.`}
              </p>

            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          {/* Price Card */}
          <div className="border rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">Price:</p>
                <p className="text-pink-500 text-2xl font-bold">$599</p>
              </div>
              <button className="text-gray-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Seller Card */}
          <div className="border rounded-lg p-4">
            <div className="flex flex-col items-center mb-4">
              <div className="relative">
                <img
                  src="/api/placeholder/70/70"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-pink-500 rounded-full w-4 h-4 border-2 border-white"></div>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Member since Nov 20, 2020
              </p>
              <p className="font-semibold text-lg">Astonix D. Dowson</p>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center mb-3">
                <div className="bg-pink-100 rounded-full p-2 mr-3">
                  <svg
                    className="w-5 h-5 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Click to Show Number</p>
                  <p className="text-gray-700">+88•••••••••••</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-pink-100 rounded-full p-2 mr-3">
                  <svg
                    className="w-5 h-5 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-gray-700">info••••••••••</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDetailPage;
