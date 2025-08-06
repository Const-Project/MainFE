import XIcon from "@/assets/icons/common/Xmack.svg";

interface DiaryHeaderProps {
  onSubmit: () => void;
}

const DiaryHeader = ({ onSubmit }: DiaryHeaderProps) => {
  return (
    <header className="w-full h-14 flex items-center justify-between p-4 border-b border-[var(--color-gray-200)]">
      <button>
        <img src={XIcon} alt="Close" className="w-4 h-4" />
      </button>
      <h1 className="text-xl font-semibold">일기쓰기</h1>
      <button className="text-lg" onClick={onSubmit}>
        완료
      </button>
    </header>
  );
};

export default DiaryHeader;
