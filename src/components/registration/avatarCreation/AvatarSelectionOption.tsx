/**
 * @file AvatarCreationOption.tsx
 * @description 아바타 선택 페이지의 옵션 컴포넌트
 */

import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button";
import { useAvatarCreationStore } from "@/stores/avatarCreationStore";

interface AvatarCreationOptionProps {
  optionId: string;
}

const AvatarCreationOption: React.FC<AvatarCreationOptionProps> = ({
  optionId,
}) => {
  const navigate = useNavigate();
  const { selectionMode, selectedOptionId, actions } = useAvatarCreationStore();
  const isSelected = selectedOptionId === optionId;

  const handleContainerClick = () => {
    if (selectionMode === "remake") {
      actions.selectOption(optionId);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate("/registration/selection-detail");
  };

  return (
    <div
      className={`flex items-center justify-between h-full border-b-5  border-[var(--color-gray-200)] ${
        isSelected
          ? "bg-[var(--color-primary-varient)] border-none"
          : "border-transparent"
      } ${selectionMode === "remake" ? "cursor-pointer" : "cursor-default"}`}
      onClick={handleContainerClick}
    >
      <div className="flex flex-col justify-between pl-6.25 h-full">
        <div className="flex flex-col gap-3 w-38.75 text-left">
          <h2 className="text-2xl font-semibold pt-8">아바타 선택</h2>
          <p className="text-lg ">00종의 아바타 중에서 선택할 수 있어요</p>
        </div>
        <div className="pb-10.25 font-semibold">
          <Button
            variant={selectionMode === "initial" ? "primary" : "gray200"}
            size="xsSelect"
            onClick={handleButtonClick}
          >
            {selectionMode === "initial" ? "선택하러 가기" : "다시 선택하기"}
          </Button>
        </div>
      </div>
      <div className="w-1/2 h-full "></div>
    </div>
  );
};

export default AvatarCreationOption;
