import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Homepage from "./pages/home/Homepage";
import SplashPage from "@/pages/splash/SplashPage";
import Design from "@/components/common/Design";

import AvatarPage from "./pages/registration/AvatarCreationPage";
import CreationDetailPage from "./pages/registration/CreationDetailPage";
import PlantNicknamePage from "./pages/registration/PlantNicknamePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<SplashPage />} />
        <Route path="/design" element={<Design />} />
        <Route path="/registration/avatar" element={<AvatarPage />} />
        <Route
          path="/registration/creation-detail"
          element={<CreationDetailPage />}
        />
        <Route
          path="/registration/plant-nickname"
          element={<PlantNicknamePage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
