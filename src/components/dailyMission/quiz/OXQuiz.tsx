import React, { useState } from "react";

import OX_O from "@/assets/icons/common/OX_O.svg?react";
import OX_X from "@/assets/icons/common/OX_X.svg?react";

const OX_Quiz: React.FC = () => {
  const [selected, setSelected] = useState<"O" | "X" | null>(null);
  const quizQuestion = "더미";

  const handleSelect = (answer: "O" | "X") => {
    setSelected(answer);
  };

  const baseBoxClass =
    "flex justify-center items-center aspect-140/123 border-1 rounded-[8px] text-6xl font-bold cursor-pointer transition-transform duration-200 select-none";

  return (
    <div className="flex flex-col flex-1 px-5 pt-2 w-full gap-8">
      <p className="text-body2">{quizQuestion}</p>
      <div className="grid grid-cols-2 gap-3 w-full">
        <div
          className={`${baseBoxClass} ${
            selected === "O"
              ? "border-gray-400 border-1 bg-gray-200"
              : "border-gray-200 border-1 bg-white"
          }`}
          onClick={() => handleSelect("O")}
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
              ? "border-gray-400 border-1 bg-gray-200"
              : "border-gray-200 border-1 bg-white"
          }`}
          onClick={() => handleSelect("X")}
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
