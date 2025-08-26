import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/querykey";

import { getPanelApi } from "@/apis/missions/getPanelApi";

export const useGetPanelApi = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.MISSION_PANEL],
    queryFn: getPanelApi,
  });
};
