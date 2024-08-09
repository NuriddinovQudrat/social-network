import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userApi } from "api/user.api";
import { USER_INFO } from "constants/query-keys";
import { UserDataInterface } from "types/server-data.types";

export const useProfileUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: UserDataInterface) =>
      await userApi.updateProfile(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_INFO] });
    },
  });
};
