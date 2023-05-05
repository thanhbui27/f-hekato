import { IUser, Response } from "src/types/users";
import request from "../../request";
import { LoginParams, RegisterParams } from "./types";

const authApi = {
  login: async (data: LoginParams) =>
    request<Response<string>>({
      url: "/api/Auth/login",
      method: "POST",
      data,
    }),
  getMe: async () =>
    request<Response<IUser>>({
      url: "/api/Auth/me",
      method: "GET",
    }),
  register: async (data: RegisterParams) =>
    request<any>({
      url: "/api/Auth/register",
      method: "POST",
      data,
    }),
};

export default authApi;
