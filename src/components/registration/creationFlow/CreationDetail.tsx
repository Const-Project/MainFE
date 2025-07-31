import React from "react";

import Edit from "@/assets/icons/edit.svg";

const CreationDetail = () => {
  // TODO: 실제 유저 이름으로 변경 필요
  const userName = "000";

  return (
    <div className="flex flex-col justify-between h-full">
      <h1 className="text-[28px] font-semibold ml-6.25 mt-8 w-64.25 h-19">{`${userName}님만의 아바타가 완성되었어요!`}</h1>

      <div className="flex justify-center pb-24.5">
        <div className="relative w-88.25 h-100 bg-gray-200 border-2 border-gray-300 rounded-lg ">
          {/* TODO: 아바타 이미지 추가 필요 */}
          <button className="absolute bottom-2 right-2 w-8 h-8 rounded-full flex items-center justify-center">
            <img src={Edit} alt="편집" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreationDetail;
