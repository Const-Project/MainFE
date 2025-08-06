import React from "react";

import Xmack from "@/assets/icons/common/Xmack.svg";

interface TakePhotoHeaderProps {
  onGoBack: () => void;
}

const TakePhotoHeader: React.FC<TakePhotoHeaderProps> = ({ onGoBack }) => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-[var(--color-gray-200)]">
      <button onClick={onGoBack}>
        <img src={Xmack} alt="Close" className="w-4 h-4" />
      </button>
      <h1 className="text-[20px] font-semibold">사진찍기</h1>
      <div className="w-4 h-4"></div>
    </header>
  );
};

export default TakePhotoHeader;
