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
  const { selectedOptionId } = useAvatarCreationStore();
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (selectedOptionId) {
      navigate("/registration/plant-nickname");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <RegistrationHeader />
      <main className="flex-grow flex flex-col min-h-0">
        <div className="flex-1  ">
          <AvatarSelectionOption optionId="selection" />
        </div>

        <div className="flex-1">
          <AvatarCreationOption optionId="creation" />
        </div>
      </main>

      <footer className="flex items-center justify-center pb-5.25 font-semibold ">
        <Button variant="gray200" size="lg" onClick={handleNextClick}>
          나중에 만들기
        </Button>
      </footer>
    </div>
  );
};

export default AvatarCreationPage;
