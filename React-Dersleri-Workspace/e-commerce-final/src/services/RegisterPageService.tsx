import type { UserType } from "../types/Types";
import { type AxiosResponse } from "axios";
import axiosInstance from "../config/AxiosConfig";

class RegisterPageService {
  register(newUser: UserType): Promise<UserType> {
    return axiosInstance
      .post<UserType>("/users", newUser)
      .then((response: AxiosResponse<UserType>) => {
        return response.data;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export default new RegisterPageService();
