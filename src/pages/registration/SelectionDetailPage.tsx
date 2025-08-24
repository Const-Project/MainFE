import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button";
import RegistrationHeader from "@/components/registration/common/RegistrationHeader";
import SelectionDetail from "@/components/registration/selectionFlow/SelectionDetail";
import { useAvatarCreationStore } from "@/stores/avatarCreationStore";

const SelectionDetailPage = () => {
  const navigate = useNavigate();
  const { actions } = useAvatarCreationStore();

  const handleNextClick = () => {
    actions.completeSelection();
    navigate("/registration/plant-nickname");
  };

  return (
    <div className="flex flex-col h-screen md:h-[852px]">
      <RegistrationHeader showBackButton={true} />
      <div className="text-heading1 pt-8 pl-6.25">
        원하는 아바타를 선택해주세요.
      </div>
      <main className="flex-1 ">
        <SelectionDetail />
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
