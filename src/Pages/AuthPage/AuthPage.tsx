import { useSearchParams } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import {
  ArrowRightIcon,
  LockIcon,
  MailIcon,
  UserIcon,
} from "../../components/Icons/Icons";
import { Form, Input } from "informed";

const AuthPage = () => {
  const onSubmit = ({ values }) => console.log(values);
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("isLogin") === "true";
  console.log(isLogin);

  return (
    <main className="px-4 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
        {/* Left Column - Registration Form */}
        <div className="p-8 w-full md:w-1/2">
          <div className="mb-6 text-center flex flex-col items-center space-y-2">
            <Logo />
            <p className="text-gray-600 text-sm text-center">
              <b>Listbnb's</b> Largest Classified Listing Marketplace offers
              perfect Ads classifieds...
            </p>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? "Login To Your Account" : "Create Your Account"}
          </h2>

          <Form onSubmit={onSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    name="email"
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Type here"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className="absolute right-3 top-2.5 text-gray-400">
                    <MailIcon />
                  </span>
                </div>
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  name="username"
                  type="text"
                  id="username"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Type here"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <span className="absolute right-3 top-2.5 text-gray-400">
                  <UserIcon />
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  name="password"
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Type here"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="absolute right-3 top-2.5 text-gray-400">
                  <LockIcon />
                </span>
              </div>
            </div>

            {!isLogin && (
              <div className="mb-6">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    name="password"
                    type="password"
                    id="confirm-password"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Type here"
                    // value={confirmPassword}
                    // onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <span className="absolute right-3 top-2.5 text-gray-400">
                    <LockIcon />
                  </span>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded-full flex items-center justify-center"
            >
              Register
              <ArrowRightIcon />
            </button>
          </Form>
        </div>

        {/* Right Column - Login Prompt */}
        <div className="bg-pink-50 p-8 w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="max-w-xs mx-auto text-center">
            <div className="mb-6">
              <img
                src="/Auth.png"
                alt="Illustration of person working"
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {!isLogin ? (
                <>
                  Already Have an Account
                  <span className="text-pink-500"> ?</span>
                </>
              ) : (
                <>
                  Don’t Have an Account{" "}
                  <span className="text-pink-500"> ?</span>
                </>
              )}
            </h3>
            {!isLogin ? (
              <p className="text-gray-600 mb-6 text-sm">
                To connect with us please login to our account if you are having
                one already.
              </p>
            ) : (
              <p className="text-gray-600 mb-6 text-sm">
                To connect with us please register for a new account if you are
                not having one already.
              </p>
            )}
            <a
              href={`?isLogin=${!isLogin}`}
              className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full flex items-center mx-auto"
            >
              {!isLogin ? " Login" : "Register"}
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
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
