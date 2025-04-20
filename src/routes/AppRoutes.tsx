import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Layout from "../Pages/Layout";
import AuthPage from "../Pages/AuthPage/AuthPage";
import AdDetailPage from "../Pages/AdDetailPage/AdDetailPage";
import Dashboard from "../Pages/Dashboard/DashBoard";
import ProfileSection from "../widgets/DashBoard/ProfileSection/ProfileSection";
import AdListWidget from "../widgets/DashBoard/AdlistingWidget/AdListWidget";
import PostAdWidget from "../widgets/DashBoard/PostAdwidget/PostAdWidget";
import DashBoardHome from "../widgets/DashBoard/DashBoardHome/DashBoardHome";
import ProtectedRoute from "../helpers/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="advertisement/:id" element={<AdDetailPage />} />
        {/* Dashboard with nested routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashBoardHome />} />
            <Route path="profile" element={<ProfileSection />} />
            <Route path="ads" element={<AdListWidget />} />
            <Route path="post-ad" element={<PostAdWidget />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
