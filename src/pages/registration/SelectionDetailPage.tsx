import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button";
import RegistrationHeader from "@/components/registration/common/RegistrationHeader";
import SelectionDetail from "@/components/registration/selectionFlow/SelectionDetail";
import { useAvatarCreationStore } from "@/stores/avatarCreationStore";

const SelectionDetailPage = () => {
  const navigate = useNavigate();
  const { actions } = useAvatarCreationStore();
  const [activeIndex, setActiveIndex] = useState(0);

  const descriptions = [
    "산세베리아",
    "스킨답서스",
    "몬스테라",
    "고무나무",
    "행운목",
    "다육",
    "난",
    "파키라",
    "군자란",
    "백량금",
  ];

  const handleNextClick = () => {
    actions.setPickSelectionAvatar({
      description: descriptions[activeIndex],
      img: `image_${activeIndex + 1}`,
      activeIndex: activeIndex,
    });
    actions.completeSelection();
    navigate("/registration/avatar");
  };

  return (
    <div className="flex flex-col h-screen md:h-[852px]">
      <RegistrationHeader showBackButton={true} />
      <div className="text-heading1 pt-8 pl-6.25">
        원하는 아바타를 선택해주세요.
      </div>
      <main className="flex-1 ">
        <SelectionDetail
          descriptions={descriptions}
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
        />
      </main>
      <footer className="flex items-center justify-center pb-8.75 px-5 text-heading2">
        <Button variant="primary" size="lg" onClick={handleNextClick}>
          다음
        </Button>
      </footer>
    </div>
  );
};

export default SelectionDetailPage;
