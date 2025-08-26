import React from "react";

import OX_O from "@/assets/icons/common/OX_O.svg?react";
import OX_X from "@/assets/icons/common/OX_X.svg?react";

interface OXQuizProps {
  quizQuestion: string;
  selected: "O" | "X" | null;
  setSelected: (value: "O" | "X") => void;
}

const OX_Quiz: React.FC<OXQuizProps> = ({
  quizQuestion,
  selected,
  setSelected,
}) => {
  const baseBoxClass =
    "flex justify-center items-center aspect-140/123 border-1 rounded-[8px] text-6xl font-bold cursor-pointer transition-transform duration-200 select-none";

  return (
    <div className="flex flex-col flex-1 w-full gap-8">
      <p className="text-body2">{quizQuestion}</p>
      <div className="grid grid-cols-2 gap-3 w-full">
        <div
          className={`${baseBoxClass} ${
            selected === "O"
              ? "border-gray-400 bg-gray-200"
              : "border-gray-200 bg-white"
          }`}
          onClick={() => setSelected("O")}
        >
          <OX_O
            width={32}
            height={32}
            className={selected === "O" ? "text-gray-800" : "text-gray-400"}
          />
        </div>
        <div
          className={`${baseBoxClass} ${
            selected === "X"
              ? "border-gray-400 bg-gray-200"
              : "border-gray-200 bg-white"
          }`}
          onClick={() => setSelected("X")}
        >
          <OX_X
            width={32}
            height={32}
            className={selected === "X" ? "text-gray-800" : "text-gray-400"}
          />
        </div>
      </div>
    </div>
  );
};

export default OX_Quiz;
