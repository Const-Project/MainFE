import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Homepage from "./pages/home/Homepage";
import SplashPage from "@/pages/splash/SplashPage";

import OnboardingPage from "./pages/onboarding/OnboardingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<SplashPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
