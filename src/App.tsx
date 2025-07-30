import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Homepage from "./pages/home/Homepage";
import SplashPage from "@/pages/splash/SplashPage";
import Design from "@/components/common/Design";

import AvatarPage from "./pages/registration/AvatarPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<SplashPage />} />
        <Route path="/design" element={<Design />} />
        <Route path="/registration/avatar" element={<AvatarPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
