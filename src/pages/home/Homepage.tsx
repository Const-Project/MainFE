import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BottomSheet from "@/components/bottom-sheet/BottomSheet";
import Lock from "@/components/lock/Lock";
import UnLock from "@/components/lock/UnLock";

import Splash from "@/components/common/Splash";

import Background from "@/assets/images/background/background1.png";

type BottomSheetType = "lock" | "unlock" | "clear";

const HomePage = () => {
  const [isUnlocked, setIsUnlocked] = useState<BottomSheetType>("lock");
  const navigate = useNavigate();
  const [isOnboarding, setIsOnboarding] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // 스플래시 표시용

  useEffect(() => {
    const token = localStorage.getItem("token");

    const timer = setTimeout(() => {
      if (token) {
        // 온보딩으로 보낼 때는 스플래시 유지 (isLoading을 false로 하지 않음)
        navigate("/onboarding", { replace: true });
        return; // 아래 코드 실행 안 함
      }

      // 토큰이 있을 때만 홈 화면을 보여주면서 스플래시 종료
      setIsOnboarding(false);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (isLoading) return <Splash />;
  // 온보딩 분기면 어차피 navigate 중이므로 아무것도 렌더하지 않기
  if (isOnboarding) return null;

  return (
    <div
      className="relative flex flex-col h-full items-center justify-between w-full bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${Background})` }}
    >
      {isUnlocked !== "clear" && (
        <>
          <div className="flex-1 flex items-center justify-center w-full">
            {isUnlocked === "unlock" ? <UnLock /> : <Lock />}
          </div>

          <button
            onClick={() =>
              setIsUnlocked(isUnlocked === "lock" ? "unlock" : "clear")
            }
            className={`w-full ${isUnlocked === "unlock" ? "bg-primary text-white" : "bg-gray-200 text-gray-400"} h-16 text-heading2`}
          >
            {isUnlocked === "lock"
              ? "아직 감자가 충분히 모이지 않았어요"
              : "씨앗 받고 해금하기!"}
          </button>
        </>
      )}
      {isUnlocked === "clear" && <BottomSheet />}
    </div>
  );
};

export default HomePage;
