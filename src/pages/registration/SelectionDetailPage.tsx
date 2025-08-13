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
    navigate("/registration/avatar");
  };

  return (
    <div className="flex flex-col h-screen">
      <RegistrationHeader showBackButton={true} />
      <main className="flex-1 ">
        <SelectionDetail />
      </main>
      <footer className="flex items-center justify-center pb-5.25">
        <Button variant="primary" size="lg" onClick={handleNextClick}>
          다음
        </Button>
      </footer>
    </div>
  );
};

export default SelectionDetailPage;
