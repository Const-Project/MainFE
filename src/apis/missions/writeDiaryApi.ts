import { ApiResponse } from "@/types/common/apiResponse.type";
import {
  writeDiaryImageUploadResponse,
  writeDiarySubmitRequest,
  writeDiarySubmitResponse,
} from "@/types/mission/writeDiary";

import axios from "@/apis/instance";

// 이미지 전송 API

export const takePhotoUploadApi = (
  formData: FormData
): ApiResponse<writeDiaryImageUploadResponse> => {
  return axios.post("/api/v1/diaries/images", formData).then(res => res.data);
};

export const writeDiarySubmitApi = async (
  params: writeDiarySubmitRequest
): ApiResponse<writeDiarySubmitResponse> => {
  return axios.post("api/v1/diaries", params).then(res => res.data);
  // try {
  //   const response = await axios.post("/api/v1/diaries", params);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error post WriteDiarySubmit:", error);
  //   throw error;
  // }
};
