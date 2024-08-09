import { useQuery } from "@tanstack/react-query";
import { USER_INFO } from "constants/query-keys";
import { userApi } from "api/user.api";

export const useProfileDetails = () => {
  return useQuery({
    queryKey: [USER_INFO],
    queryFn: () => userApi.getProfileDetails(),
  });
};
