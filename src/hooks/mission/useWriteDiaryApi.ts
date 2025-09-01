// src/hooks/mission/useWriteDiaryApi.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponse, GlobalResponse } from "@/types/common/apiResponse.type";
import {
  WriteDiaryImageUploadRequest,
  writeDiaryImageUploadResponse,
  writeDiarySubmitRequest,
  writeDiarySubmitResponse,
} from "@/types/mission/writeDiary";

import {
  takePhotoUploadApi,
  writeDiarySubmitApi,
} from "@/apis/missions/writeDiaryApi";

export const useWriteDiaryImageUploadApi = () => {
  const queryClient = useQueryClient();

  return useMutation<
    GlobalResponse<writeDiaryImageUploadResponse>,
    AxiosError<ErrorResponse>,
    WriteDiaryImageUploadRequest
  >({
    mutationFn: ({ formData }) => takePhotoUploadApi(formData),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["diaries"] });
    },
    onError: error => {
      console.error(
        "이미지 업로드 실패:",
        error.response?.data || error.message
      );
    },
    retry: 1,
  });
};

export const useWriteDiarySubmitApi = () => {
  const queryClient = useQueryClient();

  return useMutation<
    GlobalResponse<writeDiarySubmitResponse>,
    AxiosError<ErrorResponse>,
    writeDiarySubmitRequest
  >({
    mutationFn: body => writeDiarySubmitApi(body),
    onSuccess: data => {
      console.log("일기 작성 성공:", data);

      queryClient.invalidateQueries({ queryKey: ["diaries"] });
    },
    onError: error => {
      console.error("일기 작성 실패:", error.response?.data || error.message);
    },
  });
};
