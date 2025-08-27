import React from "react";

import OX_O from "@/assets/icons/common/OX_O.svg?react";
import OX_X from "@/assets/icons/common/OX_X.svg?react";

interface OXQuizProps {
  quizQuestion: string;
  selected: "O" | "X" | null;
  setSelected: (value: "O" | "X") => void;
  disabled?: boolean;
  isCorrect?: boolean;
  answerNumber?: number;
}

const OX_Quiz: React.FC<OXQuizProps> = ({
  quizQuestion,
  selected,
  setSelected,
  disabled = false,
  isCorrect,
  answerNumber,
}) => {
  const baseBoxClass =
    "flex justify-center items-center aspect-140/123 border-1 border-gray-200 rounded-[8px] text-6xl font-bold cursor-pointer select-none";

  console.log("[OX_Quiz props]", {
    disabled,
    isCorrect,
    answerNumber,
    selected,
  });
  const getBoxClass = (value: "O" | "X") => {
    console.log("OX_Quiz props", {
      disabled,
      isCorrect,
      answerNumber,
      selected,
    });
    if (answerNumber !== undefined && isCorrect !== undefined) {
      const answerValue = answerNumber === 0 ? "O" : "X";

      if (isCorrect) {
        if (value === answerValue) {
          return "bg-primary-varient border-primary text-white";
        }
      } else {
        if (selected === value) {
          return "bg-danger-varient border-danger text-white";
        }
        if (value === answerValue) {
          return "bg-primary-varient border-primary text-white";
        }
      }
    }
    return selected === value
      ? "border-gray-400 bg-gray-200"
      : "border-gray-200 bg-white";
  };

  const handleClick = (value: "O" | "X") => {
    if (disabled) return;
    setSelected(value);
  };

  return (
    <div className="flex flex-col flex-1 w-full gap-8">
      <p className="text-body2">{quizQuestion}</p>
      <div className="grid grid-cols-2 gap-3 w-full">
        <div
          className={`${baseBoxClass} ${getBoxClass("O")} `}
          onClick={() => handleClick("O")}
        >
          <OX_O
            width={32}
            height={32}
            className={selected === "O" ? "text-gray-800" : "text-gray-400"}
          />
        </div>
        <div
          className={`${baseBoxClass} ${getBoxClass("X")}`}
          onClick={() => handleClick("X")}
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
