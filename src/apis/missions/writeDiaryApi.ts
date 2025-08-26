import { writeDiaryImageUploadResponse } from "@/types/mission/writeDiary";

import axios from "@/apis/instance";

// 이미지 전송 API
export const takePhotoUploadApi = async (
  userDailyMissionId: number,
  formData: FormData
): Promise<writeDiaryImageUploadResponse> => {
  try {
    const response = await axios.post(
      `/api/v1/mission/diaries/${userDailyMissionId}/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error post TakePhotoUpload:", error);
    throw error;
  }
};
