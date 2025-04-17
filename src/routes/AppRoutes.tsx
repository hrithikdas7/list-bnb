import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Layout from "../Pages/Layout";
import AuthPage from "../Pages/AuthPage/AuthPage";
// import Layout from "../components/Layout";
// import Register from "../pages/Register";
// import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";
// import CreateAd from "../pages/CreateAd";
// import AdList from "../pages/AdList";
// import AdDetail from "../pages/AdDetail";
// import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        {/* <Route path="register" element={<Register />} />
       
        <Route path="ads" element={<AdList />} />
        <Route path="advertisement/:id" element={<AdDetail />} /> */}

        {/* Protected Routes */}
        {/* <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="create"
          element={
            <ProtectedRoute>
              <CreateAd />
            </ProtectedRoute>
          }
        /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
