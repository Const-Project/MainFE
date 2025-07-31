/**
 * @file AvatarPage.tsx
 * @description 아바타 선택 페이지
 */

import React from "react";

import AvatarCreationOption from "@/components/registration/avatarCreation/AvatarCreationOption";
import AvatarSelectionOption from "@/components/registration/avatarCreation/AvatarSelectionOption";
import ButtonFooter from "@/components/registration/common/ButtonFooter";
import RegistrationHeader from "@/components/registration/common/RegistrationHeader";

const AvatarPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <RegistrationHeader />
      <main className="flex-grow flex flex-col min-h-0">
        <div className="flex-1">
          <AvatarSelectionOption />
        </div>

        <div className="flex-1">
          <AvatarCreationOption />
        </div>
      </main>

      <ButtonFooter />
    </div>
  );
};

export default AvatarPage;
