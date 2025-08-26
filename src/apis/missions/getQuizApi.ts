import { QUERY_KEYS } from "@/constants/querykey";
import { getQuizRequest, getQuizResponse } from "@/types/realQuiz/getQuiz";

import axios from "@/apis/instance";

export const getQuizApi = async (
  params: getQuizRequest
): Promise<getQuizResponse> => {
  try {
    const response = await axios.get("/api/v1/realQuiz", { params });
    console.log("QUERY_KEYS.QUIZ.REAL는 다음과 같다.", QUERY_KEYS.QUIZ.REAL);
    return response.data;
  } catch (error) {
    console.error("Error get MissionPanel:", error);
    throw error;
  }
};
