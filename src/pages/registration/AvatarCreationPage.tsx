/**
 * @file AvatarPage.tsx
 * @description 아바타 선택 페이지
 */

import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button";
import AvatarCreationOption from "@/components/registration/avatarCreation/AvatarCreationOption";
import AvatarSelectionOption from "@/components/registration/avatarCreation/AvatarSelectionOption";
import RegistrationHeader from "@/components/registration/common/RegistrationHeader";
import { useAvatarCreationStore } from "@/stores/avatarCreationStore";

const AvatarCreationPage = () => {
  const navigate = useNavigate();
  const { activeOption } = useAvatarCreationStore();

  const handleNextClick = () => {
    if (activeOption === "none") {
      navigate("/");
    } else {
      navigate("/registration/plant-nickname");
    }
  };

  return (
    <div className="flex flex-col h-screen md:h-[852px]">
      <RegistrationHeader />
      <main className="flex-grow flex flex-col min-h-0">
        <div className="flex-1">
          <AvatarSelectionOption />
        </div>

        <div className="flex-1">
          <AvatarCreationOption />
        </div>
      </main>

      <footer className="flex items-center justify-center pb-8.75 px-5 text-heading2">
        <Button
          variant={activeOption !== "none" ? "primary" : "default"}
          size="lg"
          onClick={handleNextClick}
        >
          {activeOption !== "none" ? "다음" : "나중에 만들기"}
        </Button>
      </footer>
    </div>
  );
};

export default AvatarCreationPage;
