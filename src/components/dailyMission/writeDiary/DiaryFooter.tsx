import Check from "@/assets/icons/Check.svg?react";
import Check2 from "@/assets/icons/Check2.svg?react";

interface DiaryFooterProps {
  isPublic: boolean;
  onVisibilityChange: (isPublic: boolean) => void;
}

const DiaryFooter = ({ isPublic, onVisibilityChange }: DiaryFooterProps) => {
  return (
    <>
      <div className="flex gap-4 pl-5">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onVisibilityChange(false)}
        >
          {isPublic ? <Check /> : <Check2 />}
          <span className="cursor-pointer">나만보기</span>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onVisibilityChange(true)}
        >
          {isPublic ? <Check2 /> : <Check />}
          <span className="cursor-pointer">공개하기</span>
        </div>
      </div>
    </>
  );
};

export default DiaryFooter;
