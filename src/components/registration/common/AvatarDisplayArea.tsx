import React from "react";

import Edit from "@/assets/icons/edit.svg";

const AvatarDisplayArea: React.FC = () => {
  return (
    <div className="relative w-88.25 h-100 bg-gray-200 border-2 border-gray-300 rounded-lg ">
      {/* TODO: 아바타 이미지 추가 필요 */}
      <button className="absolute bottom-2 right-2 w-8 h-8 rounded-full flex items-center justify-center">
        <img src={Edit} alt="편집" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AvatarDisplayArea;
