import { loginUser, registerUser } from "./api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAtom } from "jotai";
import { authAtom } from "../../atoms/authAtom/authState";
import { toast } from "react-toastify";

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
type AuthResponse = {
  status: number;
  data: {
    jwt: string;
    user: {
      id: string;
    };
  };
  response: {
    data: {
      error?: {
        message?: string;
      };
    };
  };
};
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(authAtom);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("isLogin") === "true";

  const handleRegister = async (regData: RegData) => {
    try {
      const result: AuthResponse = await registerUser(regData);
      console.log("User registered successfully:", result);
      if (result?.status === 200) {
        localStorage.setItem("USER_ACCESS_TOKEN", result.data?.jwt);
        localStorage.setItem("USER_ID", result.data?.user.id);
        localStorage.setItem("USER_DETAILS", JSON.stringify(result.data.user));
        setIsAuthenticated(true);
        navigate("/dashboard");
      } else {
        toast.error(
          `Registration failed : ${result?.response?.data?.error?.message}`
        );
      }
    } catch (err) {
      console.error("Error while registering user");
    }
  };

  const handleLogin = async (userData: UserData) => {
    const result: AuthResponse = await loginUser(
      userData.username,
      userData.password
    );
    console.log("User logged in successfully:", result);

    if (result.status === 200) {
      localStorage.setItem("USER_ACCESS_TOKEN", result.data?.jwt);
      localStorage.setItem("USER_ID", result.data?.user.id);
      localStorage.setItem("USER_DETAILS", JSON.stringify(result.data.user));
      setIsAuthenticated(true);
      navigate("/dashboard");
      console.log("User logged in successfully:", result);
    } else {
      toast.error(`Login failed : ${result?.response?.data?.error?.message}`);
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
    isAuthenticated,
  };
};
