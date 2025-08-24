import { Route, Routes, useLocation } from "react-router-dom";

import FeedPage from "@/pages/feed/FeedPage";
import FollowPage from "@/pages/follow/FollowPage";
import HomePage from "@/pages/home/Homepage";
import LogDetailPage from "@/pages/log/LogDetailPage";
import LogPage from "@/pages/log/LogPage";
import OptionPage from "@/pages/option/OptionPage";
import SplashPage from "@/pages/splash/SplashPage";
import Design from "@/components/common/Design";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/layout/Navbar";

const App = () => {
  const location = useLocation();

  // Navbar가 있는 페이지들
  const navbarPaths = ["/", "/log", "/feed", "/follow", "/option"];
  const showNavbar = navbarPaths.includes(location.pathname);

  return (
    <Routes>
      <Route path="/" element={<Layout>{showNavbar && <Navbar />}</Layout>}>
        <Route index element={<HomePage />} />
        <Route path="/log" element={<LogPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/follow" element={<FollowPage />} />
        <Route path="/option" element={<OptionPage />} />
        <Route path="/splash" element={<SplashPage />} />
        <Route path="/design" element={<Design />} />
        <Route path="/log/:id" element={<LogDetailPage />} />
      </Route>
    </Routes>
  );
};

export default App;
