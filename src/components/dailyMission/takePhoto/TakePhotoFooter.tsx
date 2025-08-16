import React from "react";

interface TakePhotoFooterProps {
  image: File | null;
  onSubmit: () => void;
}

const TakePhotoFooter: React.FC<TakePhotoFooterProps> = ({
  image,
  onSubmit,
}) => {
  const buttonEnabledClasses = "bg-[#7DC960] text-white";
  const buttonDisabledClasses =
    "bg-[var(--color-gray-200)] text-[var(--color-gray-400)]";

  return (
    <footer>
      <button
        onClick={onSubmit}
        disabled={!image}
        className={`w-full h-23.25 text-lg font-bold flex items-center justify-center ${
          image ? buttonEnabledClasses : buttonDisabledClasses
        }`}
      >
        <span className="-translate-y-3">등록하기</span>
      </button>
    </footer>
  );
};

export default TakePhotoFooter;
