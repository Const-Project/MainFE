import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button";
import RegistrationHeader from "@/components/registration/common/RegistrationHeader";
import CreationDetail from "@/components/registration/creationFlow/CreationDetail";
import { useAvatarCreationStore } from "@/stores/avatarCreationStore";

const CreationDetailPage = () => {
  const navigate = useNavigate();
  const { setButtonState } = useAvatarCreationStore();

  const handleNextClick = () => {
    setButtonState("gray200", "다시 만들기");
    navigate("/registration/avatar");
  };

  return (
    <div className="flex flex-col h-screen">
      <RegistrationHeader showBackButton={false} />
      <main className="flex-1 ">
        <CreationDetail />
      </main>
      <footer className="flex items-center justify-center pb-5.25">
        <Button variant="primary" size="lg" onClick={handleNextClick}>
          다음
        </Button>
      </footer>
    </div>
  );
};

export default CreationDetailPage;
