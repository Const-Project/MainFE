//라우터
import { Route, Routes, useLocation } from "react-router-dom";

import TakePhotoPage from "@/pages/dailyMission/TakePhotoPage";
import WriteDiaryPage from "@/pages/dailyMission/WriteDiaryPage";
import HomePage from "@/pages/home/Homepage";
import LogDetailPage from "@/pages/log/LogDetailPage";
import LogPage from "@/pages/log/LogPage";
import OptionPage from "@/pages/option/OptionPage";
import RegisterPage from "@/pages/register/RegisterPage";
import SearchPage from "@/pages/search/SearchPage";
//시작화면 전
import OnBoardingPage from "@/pages/splash/OnBoardingPage";
//디자인 페이지
import Design from "@/components/common/Design";
//레이아웃
import Layout from "@/components/layout/Layout";
//네비게이션
import Navbar from "@/components/layout/Navbar";

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
        <Route path="/onboarding" element={<OnBoardingPage />} />
        <Route path="/design" element={<Design />} />
        <Route path="/dailyMission/writeDiary" element={<WriteDiaryPage />} />
        <Route path="/dailyMission/takePhoto" element={<TakePhotoPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/log/:id" element={<LogDetailPage />} />
      </Route>
    </Routes>
  );
};

export default App;
