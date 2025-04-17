const HeroSection = () => {
  return (
    <div className="py-6 px-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-2">
              Get daily thing
              <br />
              in same <span className="text-gray-300">platform</span>
            </h1>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-2">
            <div className="relative">
              <img
                src="/homepage1.png"
                alt="Woman using phone"
                className="w-full h-full object-cover rounded "
              />
              <div className="absolute top-1/3 right-0 transform translate-x-1/2 bg-white p-2 rounded-full">
                <div className="text-pink-500 border-2 border-pink-500 rounded-full h-8 w-8 flex items-center justify-center">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-2">
              <div className="bg-pink-600 text-white p-3 rounded">
                <img
                  src="/MaskGroup.png"
                  alt="Mobile app showcase"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 p-3 rounded">
                <img
                  src="/homepage2.png"
                  alt="Mobile app showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
