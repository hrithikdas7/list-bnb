import { useAtom } from "jotai";
import { authAtom } from "../../atoms/authAtom/authState";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useHeader = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useAtom(authAtom);
  useEffect(() => {
    const token = localStorage.getItem("USER_ACCESS_TOKEN");
    if (token && !isAuthenticated) {
      setIsAuthenticated(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    navigate,
    isAuthenticated,
  };
};
