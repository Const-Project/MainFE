/**
 * @file AvatarCreationOption.tsx
 * @description 아바타 선택 페이지의 옵션 컴포넌트
 */

import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button";
import { useAvatarCreationStore } from "@/stores/avatarCreationStore";

const AvatarSelectionOption: React.FC = () => {
  const navigate = useNavigate();
  const { pickSelectionAvatar, pickSelection, activeOption, actions } =
    useAvatarCreationStore();

  const handleContainerClick = () => {
    if (!pickSelection) return;
    actions.setPickAvatar({
      description: pickSelectionAvatar.description,
      img: pickSelectionAvatar.img,
      activeIndex: pickSelectionAvatar.activeIndex,
    });
    actions.setActiveOption("selection");
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate("/registration/selection-detail");
  };

  return (
    <div
      className={`flex items-center justify-between h-full border-b-1  ${pickSelection ? (activeOption === "selection" ? "bg-primary-varient border-none cursor-pointer" : "border-1 border-gray-200 cursor-pointer") : "border-1 border-gray-200 pointer-none"} `}
      onClick={pickSelection ? handleContainerClick : undefined}
    >
      <div className="flex flex-col justify-between pl-5 h-full">
        <div className="flex flex-col gap-3 w-38.75 text-left pt-8">
          <h2 className="text-heading2 ">아바타 선택</h2>
          <p className="text-body2 ">00종의 아바타 중에서 선택할 수 있어요</p>
        </div>
        <div className="pb-8 text-body1">
          <Button
            variant={pickSelection ? "gray200" : "primary"}
            size="xsSelect"
            onClick={handleButtonClick}
          >
            {pickSelection ? "다시 선택하기" : "선택하러 가기"}
          </Button>
        </div>
      </div>
      <div className="w-1/2 h-full "> </div>
    </div>
  );
};

export default AvatarSelectionOption;
