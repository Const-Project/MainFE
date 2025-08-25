/**
 * @file AvatarCreationOption.tsx
 * @description 아바타 생성 페이지의 옵션 컴포넌트
 */
import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button";
import { useAvatarCreationStore } from "@/stores/avatarCreationStore";

const AvatarCreationOption: React.FC = () => {
  const navigate = useNavigate();
  const { pickCreationAvatar, pickCreation, activeOption, actions } =
    useAvatarCreationStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    if (!pickCreation) return;
    actions.setPickAvatar({
      description: pickCreationAvatar.description,
      img: pickCreationAvatar.img,
      activeIndex: pickCreationAvatar.activeIndex,
    });
    actions.setActiveOption("creation");
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      // const imageDataUrl = reader.result as string;
      navigate("/registration/creation-detail");
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`flex items-center h-full border-b ${pickCreation ? (activeOption === "creation" ? "bg-primary-varient border-none cursor-pointer" : "border-1 border-gray-200 cursor-pointer") : "border-1 border-gray-200 pointer-none"} `}
      onClick={handleContainerClick}
    >
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />
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
            variant={pickCreation ? "gray200" : "primary"}
            size="xsCreation"
            onClick={handleButtonClick}
          >
            {pickCreation ? "다시 만들기" : "만들러 가기"}
          </Button>
        </div>
      </div>
      <div className="flex flex-1 h-full"></div>
    </div>
  );
};

export default AvatarCreationOption;
