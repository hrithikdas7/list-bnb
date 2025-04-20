import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = !!localStorage.getItem("USER_ACCESS_TOKEN"); 

  return isAuthenticated ? <Outlet /> : <Navigate to="/login?isLogin=true" replace />;
};

export default ProtectedRoute;
