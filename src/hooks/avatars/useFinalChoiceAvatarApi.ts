import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  FinalChoiceAvatarRequest,
  FinalChoiceAvatarResponse,
} from "@/types/avatars/masters";
import { ErrorResponse, GlobalResponse } from "@/types/common/apiResponse.type";

import { finalChoiceAvatarApi } from "@/apis/avatars/avatarApi";

export const useFinalChoiceAvatar = () => {
  return useMutation<
    GlobalResponse<FinalChoiceAvatarResponse>,
    AxiosError<ErrorResponse>,
    FinalChoiceAvatarRequest
  >({
    mutationFn: data => finalChoiceAvatarApi(data),
    onSuccess: data => {
      console.log("아바타 최종 선택 성공:", data.result);
    },
    onError: error => {
      alert("아바타 최종 선택에 실패했습니다.");
      console.error(error.response?.data || error.message);
    },
    retry: 1,
  });
};
