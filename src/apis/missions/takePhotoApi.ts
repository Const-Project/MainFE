import {
  takePhotoResponse,
  takePhotoUploadResponse,
} from "@/types/mission/takePhoto";

import axios from "@/apis/instance";

// 이미지 미션 완료 API.
export const takePhotoApi = async (
  userDailyMissionId: number
): Promise<takePhotoResponse> => {
  try {
    const response = await axios.post(
      `/api/v1/mission/daily/${userDailyMissionId}/complete`
    );
    return response.data;
  } catch (error) {
    console.error("Error post TakePhoto:", error);
    throw error;
  }
};

// 이미지 전송 API
export const takePhotoUploadApi = async (
  userDailyMissionId: number,
  formData: FormData
): Promise<takePhotoUploadResponse> => {
  try {
    const response = await axios.post(
      `/api/v1/mission/daily/${userDailyMissionId}/upload`,
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
