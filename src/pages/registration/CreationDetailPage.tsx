import React from "react";

import Button from "@/components/common/Button";
import RegistrationHeader from "@/components/registration/common/RegistrationHeader";
import CreationDetail from "@/components/registration/creationFlow/CreationDetail";

const CreationDetailPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <RegistrationHeader showBackButton={false} />
      <main className="flex-1 ">
        <CreationDetail />
      </main>
      <footer className="flex items-center justify-center pb-5.25">
        <Button variant="primary" size="lg">
          다음
        </Button>
      </footer>
    </div>
  );
};

export default CreationDetailPage;
