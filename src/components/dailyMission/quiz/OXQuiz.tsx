import React from "react";

import OX_O from "@/assets/icons/common/OX_O.svg?react";
import OX_X from "@/assets/icons/common/OX_X.svg?react";
import { useGetQuiz } from "@/hooks/mission/useGetQuizApi";

interface OXQuizProps {
  selected: number | null;
  setSelected: (value: number) => void;
}

const OX_Quiz: React.FC<OXQuizProps> = ({ selected, setSelected }) => {
  const { data, isLoading, isError } = useGetQuiz({ quizType: "OX" });

  const handleSelect = (answer: "O" | "X") => {
    setSelected(answer === "O" ? 1 : 0); // 숫자로 변환
    console.log(answer);
    console.log(selected);
  };

  const baseBoxClass =
    "flex justify-center items-center aspect-140/123 border-1 rounded-[8px] text-6xl font-bold cursor-pointer transition-transform duration-200 select-none";

  if (isLoading) return <p>퀴즈 불러오는 중...</p>;
  if (isError) return <p>퀴즈 불러오기 실패</p>;
  if (!data?.result) return <p>퀴즈가 없습니다.</p>;

  return (
    <div className="flex flex-col flex-1 w-full gap-8">
      <p className="text-body2">{data.result.quizQuestion}</p>
      <div className="grid grid-cols-2 gap-3 w-full">
        <div
          className={`${baseBoxClass} ${
            selected === 1
              ? "border-gray-400 bg-gray-200"
              : "border-gray-200 bg-white"
          }`}
          onClick={() => handleSelect("O")}
        >
          <OX_O
            width={32}
            height={32}
            className={selected === 0 ? "text-gray-800" : "text-gray-400"}
          />
        </div>
        <div
          className={`${baseBoxClass} ${
            selected === 0
              ? "border-gray-400 bg-gray-200"
              : "border-gray-200 bg-white"
          }`}
          onClick={() => handleSelect("X")}
        >
          <OX_X
            width={32}
            height={32}
            className={selected === 2 ? "text-gray-800" : "text-gray-400"}
          />
        </div>
      </div>
    </div>
  );
};

export default OX_Quiz;
