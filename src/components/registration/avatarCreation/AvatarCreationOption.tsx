/**
 * @file AvatarCreationOption.tsx
 * @description 아바타 생성 페이지의 옵션 컴포넌트
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
  const { creationMode, selectedOptionId, actions } = useAvatarCreationStore();

  const isSelected = selectedOptionId === optionId;

  // 컨테이너 클릭 핸들러: 'remake' 모드일 때만 클릭 이벤트를 처리함.
  const handleContainerClick = () => {
    if (creationMode === "remake") {
      actions.selectOption(optionId);
    }
  };

  // 버튼 클릭 핸들러: 항상 페이지를 이동시키도록 함.
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate("/registration/creation-detail");
  };

  return (
    <div
      className={`flex items-center justify-between h-full  ${
        isSelected
          ? "bg-[var(--color-primary-varient)] border-none"
          : "border-transparent"
      } ${creationMode === "remake" ? "cursor-pointer" : "cursor-default"}`}
      onClick={handleContainerClick}
    >
      <div className="flex flex-col justify-between pl-6.25 h-full">
        <div className="flex flex-col gap-3 w-41.25 text-left">
          <h2 className="text-2xl font-semibold pt-8">나만의 아바타</h2>
          <p className="text-lg">
            내 식물의 생김새를 반영한 나만의 아바타를 만들 수 있어요
          </p>
        </div>
        <div className="pb-10.25">
          <Button
            variant={creationMode === "initial" ? "primary" : "gray200"}
            size="xsCreation"
            onClick={handleButtonClick}
          >
            {creationMode === "initial" ? "만들러 가기" : "다시 만들기"}
          </Button>
        </div>
      </div>
      <div className="w-1/2 h-full"></div>
    </div>
  );
};

export default AvatarCreationOption;
