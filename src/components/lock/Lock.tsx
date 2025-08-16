import LockIcon from "@/assets/icons/lock.svg?react";

const Lock = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <LockIcon className="w-8 h-8" />
      <div className="text-heading2 text-danger">아직 해금되지 않았습니다!</div>
      <div className="text-body2 text-gray-600 text-center">
        감자를 충분히 모은 뒤에 <br />
        새로운 식물을 키울 수 있어요.
      </div>
    </div>
  );
};

export default Lock;
