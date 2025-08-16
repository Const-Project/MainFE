import Checkbox from "@/components/common/CheckBox";

interface DiaryFooterProps {
  isPublic: boolean;
  onVisibilityChange: (isPublic: boolean) => void;
}

const DiaryFooter = ({ isPublic, onVisibilityChange }: DiaryFooterProps) => {
  return (
    <div className="flex gap-4 pl-5">
      <Checkbox
        label="나만 보기"
        checked={!isPublic}
        onChange={() => onVisibilityChange(false)}
      />
      <Checkbox
        label="공개하기"
        checked={isPublic}
        onChange={() => onVisibilityChange(true)}
      />
    </div>
  );
};

export default DiaryFooter;
