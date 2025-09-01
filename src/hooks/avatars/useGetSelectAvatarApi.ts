import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AvatarType } from "@/types/avatars/masters";
import { ErrorResponse, GlobalResponse } from "@/types/common/apiResponse.type";

import { getSelectionAvatarApi } from "@/apis/avatars/avatarApi";

export const useGetSelectAvatar = () => {
  return useQuery<
    GlobalResponse<AvatarType[]>,
    AxiosError<ErrorResponse>,
    AvatarType[]
  >({
    queryKey: ["selectionAvatar"],
    queryFn: getSelectionAvatarApi,
    select: data => data.result,
    staleTime: 1000 * 60 * 120,
    gcTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: true,
  });
};
