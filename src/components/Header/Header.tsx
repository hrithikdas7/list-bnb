import Logo from "../Logo/Logo";
import { ArrowRightIcon } from "../Icons/Icons";
import { useHeader } from "./useHeader";

const Header = () => {
  const { navigate,isAuthenticated } = useHeader();
  return (
    <header className="border-b border-gray-200 p-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <button
              className="text-gray-600 hover:text-gray-800 font-medium"
              onClick={() => navigate("/login?isLogin=false")}
            >
              Sign In
            </button>
          ) : (
            <button
              className="text-gray-600 hover:text-gray-800 font-medium"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
          )}
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full flex items-center"
            onClick={() => navigate(`/dashboard/post-ad`)}
          >
            Post Your Ad
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
