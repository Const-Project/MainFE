import { NavLink } from "react-router-dom";

import {
  ActiveCalendar,
  ActiveHome,
  ActiveSearch,
  ActiveUser,
  Calendar,
  Home,
  Search,
  User,
} from "@/assets/icons/common";

const navItems = [
  { path: "/", icon: Home, activeIcon: ActiveHome, label: "홈" },
  {
    path: "/log",
    icon: Calendar,
    activeIcon: ActiveCalendar,
    label: "키움일지",
  },
  {
    path: "/search",
    icon: Search,
    activeIcon: ActiveSearch,
    label: "둘러보기",
  },
  { path: "/option", icon: User, activeIcon: ActiveUser, label: "설정" },
];

const Navbar = () => {
  return (
    <nav className="flex h-16 w-full items-center justify-around border-t border-gray-200 bg-white">
      {navItems.map(({ path, icon: Icon, activeIcon: ActiveIcon, label }) => (
        <NavLink
          key={path}
          to={path}
          className="flex flex-col items-center justify-center"
        >
          {({ isActive }) => (
            <div className="flex flex-col items-center gap-1">
              {isActive ? <ActiveIcon /> : <Icon />}
              <span
                className={`text-xs ${isActive ? "text-black" : "text-gray-400"}`}
              >
                {label}
              </span>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
