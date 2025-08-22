//라우터
import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "@/pages/home/Homepage";
import LogPage from "@/pages/log/LogPage";
import OptionPage from "@/pages/option/OptionPage";
import SearchPage from "@/pages/search/SearchPage";

//시작화면 전
import SplashPage from "@/pages/splash/SplashPage";
import OnBoardingPage from "@/pages/splash/OnBoardingPage";

//네비게이션
import Navbar from "@/components/layout/Navbar";

//레이아웃
import Layout from "@/components/layout/Layout";

//디자인 페이지
import Design from "@/components/common/Design";

const App = () => {
  const location = useLocation();

  // Navbar가 있는 페이지들
  const navbarPaths = ["/", "/log", "/search", "/option"];
  const showNavbar = navbarPaths.includes(location.pathname);

  return (
    <Routes>
      <Route path="/" element={<Layout>{showNavbar && <Navbar />}</Layout>}>
        <Route index element={<HomePage />} />
        <Route path="/log" element={<LogPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/option" element={<OptionPage />} />
        <Route path="/splash" element={<SplashPage />} />
        <Route path="/onboarding" element={<OnBoardingPage />} />
        <Route path="/design" element={<Design />} />
      </Route>
    </Routes>
  );
};

export default App;
