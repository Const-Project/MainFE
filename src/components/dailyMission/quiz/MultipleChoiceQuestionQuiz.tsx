import { useState } from "react";

import CheckBox from "@/components/common/CheckBox";

const MultipleChoiceQuestionQuiz = () => {
  const options = ["선택지 1", "선택지 2", "선택지 3", "선택지 4"];
  const quizQuestion =
    "퀴즈 내용 더미 텍스트입니다. 퀴즈 내용 더미 텍스트입니다. 퀴즈 내용 더미 텍스트입니다. 퀴즈 내용 더미 텍스트입니다.";

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-8 w-full ">
      <div className="text-left text-body2">{quizQuestion}</div>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <div
            key={index}
            className={`border border-gray-200 rounded-[8px] p-4 flex items-center justify-between text-body2 cursor-pointer ${
              selectedIndex === index ? "bg-gray-200 border-gray-400" : ""
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <span>{option}</span>
            <CheckBox
              className="w-[26px] h-[26px] justify-center items-center"
              strokeWidth={2}
              checked={selectedIndex === index}
              readOnly
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoiceQuestionQuiz;
