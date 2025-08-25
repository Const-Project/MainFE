import { useState } from "react";
import Modal from "../common/Modal";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BirdModal = ({ setIsOpen }: Props) => {
  const [isRecord, setIsRecord] = useState(false);

  return (
    <Modal setIsOpen={setIsOpen}>
      알림
      <div className="flex gap-2 w-full items-center justify-center">
        <div
          className={`text-body1 text-center whitespace-nowrap text-black border-b-2 flex-1  ${
            isRecord ? "border-primary" : "border-transparent"
          }`}
          onClick={() => setIsRecord(true)}
        >
          방명록
        </div>
        <div
          className={`text-body1 text-center whitespace-nowrap text-black border-b-2 flex-1 ${
            isRecord ? "border-transparent" : "border-primary"
          }`}
          onClick={() => setIsRecord(false)}
        >
          기록
        </div>
      </div>
    </Modal>
  );
};

export default BirdModal;
