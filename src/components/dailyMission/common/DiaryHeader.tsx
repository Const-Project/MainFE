import XIcon from "@/assets/icons/common/Xmack.svg?url";

interface DiaryHeaderProps {
  onSubmit?: () => void;
  showSubmit?: boolean;
  context: string;
}

const DiaryHeader = ({ onSubmit, showSubmit, context }: DiaryHeaderProps) => {
  return (
    <header className="w-full h-14 flex items-center justify-between p-4 border-b border-gray-200">
      <button>
        <img src={XIcon} alt="Close" className="w-4 h-4" />
      </button>
      <h1 className="text-heading2">{context}</h1>
      {showSubmit ? (
        <button className="text-body2" onClick={onSubmit}>
          완료
        </button>
      ) : (
        <div className="w-9 h-full" /> // Placeholder to maintain layout
      )}
    </header>
  );
};

export default DiaryHeader;
