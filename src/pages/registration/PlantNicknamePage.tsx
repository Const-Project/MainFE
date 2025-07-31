import React from "react";

import AvatarDisplayArea from "@/components/registration/common/AvatarDisplayArea";
import ButtonFooter from "@/components/registration/common/ButtonFooter";
import RegistrationHeader from "@/components/registration/common/RegistrationHeader";

const PlantNicknamePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <RegistrationHeader />
      <main className="flex-1 flex flex-col">
        <h1 className="text-[28px] font-semibold py-8 pl-5">
          식물의 별명을 지어주세요
        </h1>

        <div className="flex flex-col px-5 gap-4">
          <AvatarDisplayArea />
          <div className="relative w-88.25 h-15">
            <input
              type="text"
              placeholder="별명을 입력해주세요"
              className="border border-[var(--color-gray-400)] rounded-md w-full h-full pl-4 pr-16 placeholder:text-[var(--color-gray-400)]"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-gray-600)] text-[14px]">
              최대 6자
            </span>
          </div>
        </div>
      </main>
      <ButtonFooter />
    </div>
  );
};

export default PlantNicknamePage;
