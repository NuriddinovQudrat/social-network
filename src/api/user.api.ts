import axios from "axios";
import { API_USER } from "constants/endpoints";
import { toast } from "react-toastify";
import { UserDataInterface } from "types/server-data.types";

export class UserApi {
  getProfileDetails(): Promise<UserDataInterface> {
    return axios.get(API_USER).then((response) => response.data);
  }

  updateProfile(data: UserDataInterface): Promise<UserDataInterface> {
    return axios
      .patch(API_USER, data)
      .then((response) => {
        toast.success("Succesfully updated!");
        return response.data;
      })
      .catch((error) => {
        toast.error("An error occured!");
      });
  }
}

export const userApi = new UserApi();
