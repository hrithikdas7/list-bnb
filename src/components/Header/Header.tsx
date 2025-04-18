import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="border-b border-gray-200 p-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-4">
          <button
            className="text-gray-600 hover:text-gray-800 font-medium"
            onClick={() => navigate("/login?isLogin=false")}
          >
            Sign In
          </button>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full flex items-center">
            Post Your Ad
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
