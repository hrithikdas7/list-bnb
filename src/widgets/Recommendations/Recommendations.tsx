import { useSwrStatic } from "../../apis/swr";

interface Product {
  id: number;
  title: string;
  category: string;
  time: string;
  price: number;
  image: string;
  isHot?: boolean;
}

const Recommendations = () => {
    const {
        data: projectData,
      } = useSwrStatic( `/api/advertisements`,)
    
      console.log(projectData)
  const products: Product[] = [
    {
      id: 1,
      title: "TvT Pro Smart TWS E/10/9go Best Price, Urgent",
      category: "Paris",
      time: "1 day ago",
      price: 499,
      image: "/api/placeholder/210/160",
    },
    {
      id: 2,
      title: "HP Envy x360 Laptop - Core i7 16GB RAM 512GB SSD",
      category: "Paris",
      time: "1 day ago",
      price: 649,
      image: "/api/placeholder/210/160",
      isHot: true,
    },
    {
      id: 3,
      title: 'Sony 55" 4K Smart LED TV - Excellent Picture Quality',
      category: "Paris",
      time: "1 day ago",
      price: 499,
      image: "/api/placeholder/210/160",
    },
    {
      id: 4,
      title: 'Sony 55" 4K Smart LED TV - Excellent Picture Quality',
      category: "Paris",
      time: "1 day ago",
      price: 499,
      image: "/api/placeholder/210/160",
    },
    {
      id: 5,
      title: "Apple macbook pro 15.4-inch monitor laptop",
      category: "Paris",
      time: "1 day ago",
      price: 499,
      image: "/api/placeholder/210/160",
    },
    {
      id: 6,
      title: "Panasonic Split Air Conditioner - 1.5 ton, Inverter Technology",
      category: "Paris",
      time: "1 day ago",
      price: 649,
      image: "/api/placeholder/210/160",
    },
    {
      id: 7,
      title: "MTB/Road/Front Load Washing Machine - 7kg Capacity",
      category: "Paris",
      time: "1 day ago",
      price: 499,
      image: "/api/placeholder/210/160",
    },
  ];
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
          <div className="text-sm text-pink-500 font-medium">33 Items</div>
          <div className="flex space-x-2">
            <button className="bg-gray-900 text-white h-6 w-6 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <button className="text-gray-400 h-6 w-6 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded overflow-hidden"
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
                    {product.id === 2 && (
                      <button className="text-pink-500 hover:text-pink-600">
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
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
