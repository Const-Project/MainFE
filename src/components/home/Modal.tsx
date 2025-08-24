import { useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MapModal = ({ setIsOpen }: Props) => {
  // ESC로 닫기 + 스크롤 잠금
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [setIsOpen]);

  const portalRoot = document.getElementById("portal-root") ?? document.body;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[2000] bg-black/50 flex items-center justify-center"
      onClick={() => setIsOpen(false)} // 배경 클릭 시 닫기
    >
      <div
        className="relative bg-white px-6 py-5 text-body-sb text-black rounded-lg"
        onClick={e => e.stopPropagation()} // 내용 클릭 시 전파 막기
      >
        마음 건강 체크하기
        <div className="flex flex-col gap-4 w-full items-center justify-center">
          <button className="button-secondary">오늘 하루 좋았어요</button>
          <button className="button-secondary">오늘 하루 괜찮았어요</button>
          <button className="button-secondary">오늘 하루 아쉬웠어요</button>
        </div>
      </div>
    </div>,
    portalRoot
  );
};

export default MapModal;
