/**
 * @file AvatarSelectionOption.tsx
 * @description 아바타 선택 페이지의 옵션 컴포넌트
 */

import React from "react";

const AvatarSelectionOption = () => {
  return (
    <div className="flex items-center justify-between h-full">
      <div className="flex flex-col justify-between pl-6.25 h-full">
        <div className="flex flex-col gap-3 w-41.25">
          <h2 className="text-2xl font-semibold pt-8">나만의 아바타</h2>
          <p className="text-lg ">
            내 식물의 생김새를 반영한 나만의 아바타를 만들 수 있어요
          </p>
        </div>
        <div className="pb-10.25">
          <button className=" bg-primary w-34.5 h-11.25 text-white rounded-lg">
            선택하러 가기
          </button>
        </div>
      </div>
      <div className="w-1/2 h-full "></div>
    </div>
  );
};

export default AvatarSelectionOption;
