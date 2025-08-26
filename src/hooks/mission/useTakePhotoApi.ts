// src/hooks/mission/usePostTakePhotoApi.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/querykey";

import { takePhotoApi, takePhotoUploadApi } from "@/apis/missions/takePhotoApi";

// 이미지 미션 완료 API 훅
export const usePostTakePhotoApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userDailyMissionId: number) =>
      takePhotoApi(userDailyMissionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MISSION_PANEL] });
    },
    onError: error => {
      console.error("Failed to complete mission:", error);
    },
  });
};

// 이미지 업로드 API 훅
export const useTakePhotoUploadApi = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userDailyMissionId,
      formData,
    }: {
      userDailyMissionId: number;
      formData: FormData;
    }) => takePhotoUploadApi(userDailyMissionId, formData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MISSION_PANEL] });
    },

    onError: error => {
      console.error("Failed to upload mission photo:", error);
    },
  });
};
