import { useState } from "react";

import Button from "@/components/common/Button";
import DiaryHeader from "@/components/dailyMission/common/DiaryHeader";
import OX_Quiz from "@/components/dailyMission/quiz/OXQuiz";

const QuizPage = () => {
  // const [quizType, setQuizType] = useState<"ox" | "mcq">("ox");
  const [selected, setSelected] = useState<number | null>(null); // 숫자로 변경 (O:1, X:2)

  // useEffect(() => {
  //   setQuizType(Math.random() < 0.5 ? "ox" : "mcq");
  // }, []);

  return (
    <div className="flex flex-col h-screen md:h-[852px] pb-6">
      <DiaryHeader showSubmit={false} context="퀴즈 풀기" />
      <main className="flex-grow flex flex-col px-5 pt-8 gap-2">
        <div className="text-heading1">오늘의 퀴즈 !</div>
        <div className="w-full max-w-md">
          {/* {quizType === "ox" ? (
            <OX_Quiz selected={selected} setSelected={setSelected} />
          ) : (
            <MultipleChoiceQuestionQuiz />
          )} */}
          <OX_Quiz selected={selected} setSelected={setSelected} />
        </div>
      </main>
      <footer className="flex items-center justify-center px-5 pt-2.25 text-heading2">
        <Button variant="gray200" size="lg">
          정답 확인하기
        </Button>
      </footer>
    </div>
  );
};

export default QuizPage;
