import {
  FinalChoiceAvatarRequest,
  FinalChoiceAvatarResponse,
} from "@/types/avatars/masters";

import axios from "@/apis/instance";

export const getSelectionAvatarApi = async () => {
  try {
    const response = await axios.get("/api/v1/avatars/masters");
    return response.data;
  } catch (error) {
    alert("회원가입에 실패했습니다.");
    console.log(error);
  }
};

export const finalChoiceAvatarApi = async (
  data: FinalChoiceAvatarRequest
): Promise<FinalChoiceAvatarResponse> => {
  try {
    const response = await axios.post<FinalChoiceAvatarResponse>(
      "/api/v1/avatars",
      data
    );
    return response.data;
  } catch (error) {
    console.error("아바타 선택 실패:", error);
    throw error;
  }
};
