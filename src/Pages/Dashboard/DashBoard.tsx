import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBar/SideBar";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex py-6 gap-6">
          <Sidebar />
          <main className="flex-1 bg-gray-50 rounded-lg p-6">
            <Outlet/>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
