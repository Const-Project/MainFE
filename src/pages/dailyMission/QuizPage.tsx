import { useEffect, useState } from "react";

import DiaryHeader from "@/components/dailyMission/common/DiaryHeader";
import MultipleChoiceQuestionQuiz from "@/components/dailyMission/quiz/MultipleChoiceQuestionQuiz";
import OX_Quiz from "@/components/dailyMission/quiz/OXQuiz";
import QuizFooter from "@/components/dailyMission/quiz/QuizFooter";

const QuizPage = () => {
  const [quizType, setQuizType] = useState<"ox" | "mcq">("ox");

  useEffect(() => {
    setQuizType(Math.random() < 0.5 ? "ox" : "mcq");
  }, []);

  return (
    <div className="flex flex-col h-full">
      <DiaryHeader showSubmit={false} context="퀴즈 풀기" />
      <main className="flex-grow flex flex-col px-5 pt-8 gap-2">
        <div className="text-heading1">오늘의 퀴즈 !</div>
        <div className="w-full max-w-md">
          {quizType === "ox" ? <OX_Quiz /> : <MultipleChoiceQuestionQuiz />}
        </div>
      </main>
      <QuizFooter />
    </div>
  );
};

export default QuizPage;
