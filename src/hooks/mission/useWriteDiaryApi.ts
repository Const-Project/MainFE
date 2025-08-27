// src/hooks/mission/useWriteDiaryApi.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/querykey";
import { writeDiaryImageUploadResponse } from "@/types/mission/writeDiary";

import { takePhotoUploadApi } from "@/apis/missions/writeDiaryApi"; // API 파일 따로 분리 권장

export const useWriteDiaryImageUploadApi = () => {
  const queryClient = useQueryClient();

  return useMutation<
    writeDiaryImageUploadResponse,
    Error,
    { formData: FormData }
  >({
    mutationFn: ({ formData }) => takePhotoUploadApi(formData),
    onSuccess: data => {
      console.log("일기 사진 업로드 성공:", data);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.DIARIES] });
    },

    onError: error => {
      console.error("일기 사진 업로드 실패:", error);
    },
  });
};
