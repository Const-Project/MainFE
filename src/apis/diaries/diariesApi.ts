import { postDiaryResponse } from "@/types/diaries/diaries";

import axios from "@/apis/instance";

export const diariesApi = async (): Promise<postDiaryResponse> => {
  try {
    const response = await axios.post("/api/v1/diaries");
    return response.data;
  } catch (error) {
    console.error("Error posting diary:", error);
    throw error;
  }
};
