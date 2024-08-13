import { useQuery } from "@tanstack/react-query";
import { ALL_USERS } from "constants/query-keys";
import { userApi } from "api/user.api";

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: [ALL_USERS],
    queryFn: () => userApi.getALlUsers(),
  });
};
