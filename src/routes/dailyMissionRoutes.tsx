import { Route } from "react-router-dom";

import QuizPage from "@/pages/dailyMission/QuizPage";
import TakePhotoPage from "@/pages/dailyMission/TakePhotoPage";
import WriteDiaryPage from "@/pages/dailyMission/WriteDiaryPage";

const DailyMissionRoutes = (
  <>
    <Route
      path="/dailyMission/writeDiary/:userDailyMissionId"
      element={<WriteDiaryPage />}
    />
    <Route
      path="/dailyMission/takePhoto/:userDailyMissionId"
      element={<TakePhotoPage />}
    />
    <Route path="/dailyMission/quiz" element={<QuizPage />} />
  </>
);

export default DailyMissionRoutes;
