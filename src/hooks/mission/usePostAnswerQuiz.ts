import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponse, GlobalResponse } from "@/types/common/apiResponse.type";
import { AnswerQuizResponse } from "@/types/realQuiz/answerQuiz";

import { postAnswerQuizApi } from "@/apis/missions/QuizApi";

interface AnswerQuizParams {
  quizId: number;
  selectedOptionOrder: number;
}

export const useAnswerQuiz = () => {
  return useMutation<
    GlobalResponse<AnswerQuizResponse>, // 성공 응답 타입
    AxiosError<ErrorResponse>, // 에러 타입
    AnswerQuizParams // 요청 파라미터 타입
  >({
    mutationFn: ({ quizId, selectedOptionOrder }: AnswerQuizParams) =>
      postAnswerQuizApi({ quizId, selectedOptionOrder }),
    onSuccess: data => {
      console.log("퀴즈 답안 제출 성공:", data.result);
    },
    onError: error => {
      console.error(
        "퀴즈 답안 제출 실패:",
        error.response?.data || error.message
      );
    },
  });
};
