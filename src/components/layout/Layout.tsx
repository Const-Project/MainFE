import { ReactNode } from "react";

import { Outlet } from "react-router-dom";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-200">
      <div className="relative flex h-full w-full max-w-sm flex-col overflow-hidden bg-white shadow-lg sm:h-[var(--app-height)] sm:rounded-lg">
        <main className="flex-grow overflow-y-auto">
          <Outlet />
        </main>
        {children}
      </div>
    </div>
  );
};

export default Layout;
