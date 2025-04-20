import React from "react";
import SidebarLink from "./SideBarLinks/SideBarLinks";


const Sidebar: React.FC = () => (
  <aside className="w-48">
    <nav className="space-y-1 mb-8">
      <SidebarLink to="/dashboard">My Account</SidebarLink>
      <SidebarLink to="/dashboard/profile">Profile</SidebarLink>
      <SidebarLink to="/dashboard/ads">Ads</SidebarLink>
      <SidebarLink to="/dashboard/post-ad">Post Ad</SidebarLink>
      <SidebarLink to="/dashboard/logout">Logout</SidebarLink>
    </nav>
  </aside>
);

export default Sidebar;
