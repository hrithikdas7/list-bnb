import { loginUser, registerUser } from "./api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAtom } from "jotai";
import { authAtom } from "../../atoms/authAtom/authState";

type UserData = {
  username: string;
  password: string;
};

type RegData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(authAtom);
  const navigate = useNavigate();

  console.log("isAuthenticated", isAuthenticated);
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("isLogin") === "true";

  const handleRegister = async (regData: RegData) => {
    try {
      const result = await registerUser(regData);
      console.log("User registered successfully:", result);
      if (result.jwt) {
        localStorage.setItem("USER_ACCESS_TOKEN", result.jwt);
        localStorage.setItem("USER_USERNAME", result.user.username);
        localStorage.setItem("USER_DETAILS", JSON.stringify(result.user));
        setIsAuthenticated(true);
        navigate("/dashboard");
        console.log("User logged in successfully:", result);
      }
    } catch (err) {
      console.error("Error while registering user");
    }
  };

  const handleLogin = async (userData: UserData) => {
    const result = await loginUser(userData.username, userData.password);

    if (result.jwt) {
      localStorage.setItem("USER_ACCESS_TOKEN", result.jwt);
      localStorage.setItem("USER_ID", result.user.id);
      localStorage.setItem("USER_USERNAME", result.user.username);
      localStorage.setItem("USER_DETAILS", JSON.stringify(result.user));
      setIsAuthenticated(true);
      navigate("/dashboard");
      console.log("User logged in successfully:", result);
    }
  };

  const onSubmit = (values: any) => {
    if (isLogin) {
      handleLogin(values);
    } else {
      handleRegister(values);
    }
  };

  return {
    handleRegister,
    handleLogin,
    onSubmit,
    isLogin,
  };
};
