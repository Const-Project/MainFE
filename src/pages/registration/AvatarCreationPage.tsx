/**
 * @file AvatarPage.tsx
 * @description 아바타 선택 페이지
 */

import React from "react";

import { useNavigate } from "react-router-dom";

import AvatarCreationOption from "@/components/registration/avatarCreation/AvatarCreationOption";
import AvatarSelectionOption from "@/components/registration/avatarCreation/AvatarSelectionOption";
import ButtonFooter from "@/components/registration/common/ButtonFooter";
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
        <button className="flex-1">
          <AvatarSelectionOption />
        </button>

        <div className="flex-1">
          <AvatarCreationOption optionId="creation" />
        </div>
      </main>

      <ButtonFooter
        nextButtonVariant={selectedOptionId ? "primary" : "gray600"}
        onNextClick={handleNextClick}
      />
    </div>
  );
};

export default AvatarCreationPage;
