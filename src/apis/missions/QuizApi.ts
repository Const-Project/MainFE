import { ApiResponse, GlobalResponse } from "@/types/common/apiResponse.type";
import {
  AnswerQuizRequest,
  AnswerQuizResponse,
} from "@/types/realQuiz/answerQuiz";
import { getQuizRequest, getQuizResponse } from "@/types/realQuiz/getQuiz";

import axios from "@/apis/instance";

export const getQuizApi = async (
  params: getQuizRequest
): ApiResponse<getQuizResponse> => {
  return axios.get("/api/v1/realQuiz", { params }).then(res => res.data);
};

export const postAnswerQuizApi = async ({
  selectedOptionOrder,
  quizId,
}: AnswerQuizRequest & { quizId: number }): Promise<
  GlobalResponse<AnswerQuizResponse>
> => {
  try {
    const response = await axios.post<GlobalResponse<AnswerQuizResponse>>(
      `/api/v1/realQuiz/${quizId}/answer`,
      { selectedOptionOrder }
    );
    return response.data;
  } catch (error) {
    console.error("퀴즈 답안 제출 실패:", error);
    throw error;
  }
};
