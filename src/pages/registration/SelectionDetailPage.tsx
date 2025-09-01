import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button";
import Loading from "@/components/loading/loading";
import RegistrationHeader from "@/components/registration/common/RegistrationHeader";
import SelectionDetail from "@/components/registration/selectionFlow/SelectionDetail";
import { useGetSelectAvatar } from "@/hooks/avatars/useGetSelectAvatarApi";
import { useAvatarCreationStore } from "@/stores/avatarCreationStore";
import { AvatarType } from "@/types/avatars/masters";

const SelectionDetailPage = () => {
  const navigate = useNavigate();
  const { actions } = useAvatarCreationStore();
  const { data, isLoading, isError } = useGetSelectAvatar();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (data && data.length > 0 && selectedId === null) {
      setSelectedId(data[0].id);
    }
  }, [data, selectedId]);

  const handleNextClick = () => {
    if (selectedId === null || !data) return;

    const selectedAvatar = data.find(
      (avatar: AvatarType) => avatar.id === selectedId
    );

    if (selectedAvatar) {
      actions.setPickSelectionAvatar({
        id: selectedAvatar.id,
        description: selectedAvatar.description,
        img: selectedAvatar.defaultImageUrl,
      });
      actions.setPickAvatar({
        id: selectedAvatar.id,
        description: selectedAvatar.description,
        img: selectedAvatar.defaultImageUrl,
      });
      actions.setActiveOption("selection");
      actions.completeSelection();

      navigate("/registration/avatar");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error fetching avatars.</div>;
  }

  return (
    <div className="flex flex-col h-screen md:h-[852px]">
      <RegistrationHeader showBackButton={true} />
      <div className="text-heading1 pt-8 pl-6.25">
        원하는 아바타를 선택해주세요.
      </div>
      <main className="flex-1">
        {data && selectedId !== null && (
          <SelectionDetail
            avatars={data}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        )}
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
