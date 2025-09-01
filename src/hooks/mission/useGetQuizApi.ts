import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ApiResponse, ErrorResponse } from "@/types/common/apiResponse.type";
import { getQuizRequest, getQuizResponse } from "@/types/realQuiz/getQuiz";

import { getQuizApi } from "@/apis/missions/QuizApi";

export const useGetQuiz = (params: getQuizRequest) => {
  return useQuery<
    ApiResponse<getQuizResponse>, // 서버 전체 응답 타입
    AxiosError<ErrorResponse>, // Axios 확장 에러 타입
    getQuizResponse // select로 실제 사용할 데이터 타입
  >({
    queryKey: ["quiz", params],
    queryFn: () => getQuizApi(params),
    staleTime: 1000 * 60 * 5, // 5분 동안 stale 처리 안함
    retry: 1, // 실패 시 1번 재시도
    refetchOnWindowFocus: false, // 창 포커스 시 재요청 X
  });
};
