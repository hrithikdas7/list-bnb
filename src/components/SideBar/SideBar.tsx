import SidebarLink from "./SideBarLinks/SideBarLinks";

const Sidebar = () => (
  <aside className="w-48">
    <nav className="space-y-1 mb-8">
      <SidebarLink to="/dashboard">My Account</SidebarLink>
      <SidebarLink to="/dashboard/profile">Profile</SidebarLink>
      <SidebarLink to="/dashboard/ads">Ads</SidebarLink>
      <SidebarLink to="/dashboard/post-ad">Post Ad</SidebarLink>
      <button
        className="block py-2 px-4 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100"
        onClick={() => {
          localStorage.removeItem("USER_ACCESS_TOKEN");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </nav>
  </aside>
);

export default Sidebar;
