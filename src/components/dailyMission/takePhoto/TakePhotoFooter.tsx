import React from "react";

interface TakePhotoFooterProps {
  onSubmit: () => void;
}

const TakePhotoFooter: React.FC<TakePhotoFooterProps> = ({ onSubmit }) => {
  return (
    <footer>
      <button
        onClick={onSubmit}
        className="w-full h-23.25 bg-[var(--color-gray-200)] text-[var(--color-gray-400)] text-lg font-bold flex items-center justify-center"
      >
        <span className="-translate-y-3">등록하기</span>
      </button>
    </footer>
  );
};

export default TakePhotoFooter;
