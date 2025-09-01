import Axios from "axios";

import {
  CreateAvatarResponse,
  FinalChoiceAvatarRequest,
  FinalChoiceAvatarResponse,
} from "@/types/avatars/masters";
import { AvatarType } from "@/types/avatars/masters";
import { ApiResponse, GlobalResponse } from "@/types/common/apiResponse.type";

import axios from "@/apis/instance";

export const getSelectionAvatarApi = async (): ApiResponse<AvatarType[]> => {
  return axios.get("/api/v1/avatars/masters").then(res => res.data);
};

export const postCrationAvatarApi = async (
  formData: FormData
): Promise<CreateAvatarResponse> => {
  try {
    const response = await Axios.post(
      "http://43.200.84.255:8000/process-image",
      formData
    );
    return response.data;
  } catch (error) {
    console.error("error :", error);
    throw error;
  }
};

export const finalChoiceAvatarApi = async (
  data: FinalChoiceAvatarRequest
): Promise<GlobalResponse<FinalChoiceAvatarResponse>> => {
  try {
    const response = await axios.post<
      GlobalResponse<FinalChoiceAvatarResponse>
    >("/api/v1/avatars", data);
    return response.data;
  } catch (error) {
    console.error("아바타 선택 실패:", error);
    throw error;
  }
};
