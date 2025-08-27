import { ApiResponse } from "@/types/common/apiResponse.type";
import axios from "@/apis/instance";
import { HomeSummaryPayload } from "@/types/home/garden";

export const homeApi = async (): ApiResponse<HomeSummaryPayload> => {
  return axios.get("/api/v1/home").then(res => res.data);
};
