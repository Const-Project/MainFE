import { Outlet } from "react-router-dom";

const LayoutWithoutNavbar = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-200">
      <div className="relative flex h-full w-full max-w-sm flex-col overflow-hidden bg-white shadow-lg sm:h-[var(--app-height)] sm:rounded-lg">
        <main className="flex-grow overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutWithoutNavbar;
