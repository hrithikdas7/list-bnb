import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarLinkProps {
  to: string;
  children: React.ReactNode;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, children }) => {
  const isDashboardRoot = to === "/dashboard";

  return (
    <NavLink
      to={to}
      end={isDashboardRoot} // Only set `end` for dashboard root
      className={({ isActive }) =>
        `block py-2 px-4 rounded-md text-sm font-medium ${
          isActive ? "bg-gray-800 text-white" : "text-gray-600 hover:bg-gray-100"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default SidebarLink;
