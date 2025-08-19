import { useState } from "react";

import BottomSheet from "@/components/bottom-sheet/BottomSheet";
import Lock from "@/components/lock/Lock";
import UnLock from "@/components/lock/UnLock";

type BottomSheetType = "lock" | "unlock" | "clear";

const HomePage = () => {
  const [isUnlocked, setIsUnlocked] = useState<BottomSheetType>("lock");
  return (
    <div className="relative flex w-full items-center justify-center h-full ">
      <div className="flex flex-col h-full items-center justify-between w-full">
        {isUnlocked !== "clear" && (
          <>
            <div className="flex-1 flex items-center justify-center">
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
    </div>
  );
};

export default HomePage;
