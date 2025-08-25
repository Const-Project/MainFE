import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postDiaryRequest, postDiaryResponse } from "@/types/diaries/diaries";

import { diariesApi } from "../../apis/diaries/diariesApi";
import { QUERY_KEYS } from "../../constants/querykey";

export const usePostDiaryApi = () => {
  const queryClient = useQueryClient();

  return useMutation<postDiaryResponse, Error, postDiaryRequest>({
    mutationFn: diariesApi,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.DIARIES] });
      console.log("Diary posted successfully:", data);
    },
    onError: error => {
      console.error("Error posting diary:", error);
    },
  });
};
