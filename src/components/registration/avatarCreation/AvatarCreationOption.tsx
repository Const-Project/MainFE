/**
 * @file AvatarCreationOption.tsx
 * @description 아바타 생성 페이지의 옵션 컴포넌트
 */
import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button";
import { useAvatarCreationStore } from "@/stores/avatarCreationStore";

const AvatarCreationOption: React.FC = () => {
  const navigate = useNavigate();
  const { pickCreationAvatar, pickAvatar, pickCreation } =
    useAvatarCreationStore();
  console.log(
    "pickCreationAvatar",
    pickCreation,
    "pickAvatar",
    pickAvatar,
    "pickCreation",
    pickCreationAvatar
  );

  const handleContainerClick = () => {
    pickAvatar.description = pickCreationAvatar.description;
    pickAvatar.img = pickCreationAvatar.img;
    pickAvatar.activeIndex = pickCreationAvatar.activeIndex;
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate("/registration/creation-detail");
  };

  return (
    <div
      className={`flex items-center  h-full border-b-1  border-[var(--color-gray-200)] ${
        pickCreation
          ? "bg-primary-varient border-none cuusor-pointer"
          : "border-1 border-gray-200 pointer-none"
      } `}
      onClick={handleContainerClick}
    >
      <div className="flex flex-col justify-between pl-5 h-full">
        <div className="flex flex-col gap-3 w-auto text-left pt-8">
          <h2 className="text-heading2">나만의 아바타</h2>
          <p className="text-body2">
            <span>내 식물의 생김새를</span>
            <br />
            <span>반영한 나만의 아바타를</span>
            <br />
            <span>만들 수 있어요</span>
          </p>
        </div>
        <div className="pb-10.25 font-semibold">
          <Button
            variant={pickCreationAvatar ? "primary" : "gray200"}
            size="xsCreation"
            onClick={handleButtonClick}
          >
            {pickCreationAvatar ? "만들러 가기" : "다시 만들기"}
          </Button>
        </div>
      </div>
      <div className="flex flex-1 h-full"></div>
    </div>
  );
};

export default AvatarCreationOption;
