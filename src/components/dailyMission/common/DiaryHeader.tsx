import XIcon from "@/assets/icons/common/Xmack.svg?url";

interface DiaryHeaderProps {
  onSubmit?: () => void;
  showSubmit?: boolean;
}

const DiaryHeader = ({ onSubmit, showSubmit }: DiaryHeaderProps) => {
  return (
    <header className="w-full h-14 flex items-center justify-between p-4 border-b border-[var(--color-gray-200)]">
      <button>
        <img src={XIcon} alt="Close" className="w-4 h-4" />
      </button>
      <h1 className="text-xl font-semibold">일기쓰기</h1>
      {showSubmit ? (
        <button className="text-lg text-black" onClick={onSubmit}>
          완료
        </button>
      ) : (
        <div className="w-9 h-full" /> // Placeholder to maintain layout
      )}
    </header>
  );
};

export default DiaryHeader;
