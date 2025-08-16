import { useState } from "react";

import Lock from "@/components/lock/Lock";
import UnLock from "@/components/lock/UnLock";

const HomePage = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  return (
    <div className="flex w-full items-center justify-center h-full ">
      <div className="flex flex-col h-full items-center justify-between w-full">
        <div className="flex-1 flex items-center justify-center">
          {isUnlocked ? <UnLock /> : <Lock />}
        </div>
        <button
          onClick={() => setIsUnlocked(!isUnlocked)}
          className={`w-full ${isUnlocked ? "bg-primary text-white" : "bg-gray-200 text-gray-400"} h-16 text-heading2`}
        >
          {!isUnlocked
            ? "아직 감자가 충분히 모이지 않았어요"
            : "씨앗 받고 해금하기!"}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
