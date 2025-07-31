/**
 * @file AvatarCreationOption.tsx
 * @description 아바타 선택 페이지의 옵션 컴포넌트
 */

import React from "react";

import Button from "@/components/common/Button";

const AvatarCreationOption = () => {
  return (
    <div className="flex items-center justify-between h-full border-b-2 border-[var(--color-gray-200)]">
      <div className="flex flex-col justify-between pl-6.25 h-full">
        <div className="flex flex-col gap-3 w-38.75">
          <h2 className="text-2xl font-semibold pt-8">아바타 선택</h2>
          <p className="text-lg ">00종의 아바타 중에서 선택할 수 있어요</p>
        </div>
        <div className="pb-10.25">
          <Button variant="primary" size="xsSelect">
            선택하러 가기
          </Button>
        </div>
      </div>
      <div className="w-1/2 h-full "></div>
    </div>
  );
};

export default AvatarCreationOption;
