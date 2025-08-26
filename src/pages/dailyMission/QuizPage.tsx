import { useState } from "react";

import Button from "@/components/common/Button";
import DiaryHeader from "@/components/dailyMission/common/DiaryHeader";
import OX_Quiz from "@/components/dailyMission/quiz/OXQuiz";
import { useGetQuiz } from "@/hooks/mission/useGetQuizApi";
import { useAnswerQuiz } from "@/hooks/mission/usePostAnswerQuiz";

const QuizPage = () => {
  const [selected, setSelected] = useState<"O" | "X" | null>(null);
  const [answerResult, setAnswerResult] = useState<{
    isCorrect: boolean;
    description: string;
  } | null>(null);

  // 오늘의 OX 퀴즈 가져오기
  const { data, isLoading, isError } = useGetQuiz({ quizType: "OX" });

  // 정답 제출 훅
  const { mutate: submitAnswer, isLoading: isSubmitting } = useAnswerQuiz();

  if (isLoading) return <p>퀴즈 불러오는 중...</p>;
  if (isError || !data?.result) return <p>퀴즈 불러오기 실패</p>;

  const { quizId, quizQuestion } = data.result;

  const handleSubmit = () => {
    if (!quizId || selected === null) {
      alert("답을 선택해주세요!");
      return;
    }

    const selectedOptionOrder = selected === "O" ? 1 : 2;

    submitAnswer(
      { quizId, selectedOptionOrder },
      {
        onSuccess: res => {
          const { isCorrect, answerDescription } = res.result;
          setAnswerResult({
            isCorrect,
            description: answerDescription,
          });
        },
        onError: () => {
          alert("정답 제출 실패");
        },
      }
    );
  };

  return (
    <div className="flex flex-col h-screen md:h-[852px] pb-6">
      <DiaryHeader showSubmit={false} context="퀴즈 풀기" />
      <main className="flex-grow flex flex-col px-5 pt-8 gap-2">
        <div className="text-heading1">오늘의 퀴즈 !</div>
        <div className="w-full max-w-md">
          <OX_Quiz
            quizQuestion={quizQuestion}
            selected={selected}
            setSelected={setSelected}
          />

          {answerResult && (
            <div
              className={`pt-6.5 flex flex-col gap-2 rounded-lg  ${
                answerResult.isCorrect ? "text-primary" : "text-danger"
              }`}
            >
              <p
                className={`text-body1 ${
                  answerResult.isCorrect ? "text-green-600" : "text-red-600"
                }`}
              >
                {answerResult.isCorrect ? "정답!" : "오답!"}
              </p>
              <p className="text-body-sb">{answerResult.description}</p>
            </div>
          )}
        </div>
      </main>
      <footer className="flex items-center justify-center px-5 pt-2.25 text-heading2">
        <Button
          variant={selected ? "primary" : "gray200"}
          size="lg"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "제출 중..." : "정답 확인하기"}
        </Button>
      </footer>
    </div>
  );
};

export default QuizPage;
