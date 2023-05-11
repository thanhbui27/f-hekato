import { IUser, Response } from "src/types/users";
import request from "../../request";
import { LoginParams, RegisterParams } from "./types";
import { paramProduct } from "../product/types";
import { IResponePagination } from "src/types/response";

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
  lockUser: async (id: string, dateTime: string) =>
    request<Response<boolean>>({
      url: "/api/Auth/lockUser",
      method: "Post",
      params: { id, dateTime },
    }),
  unlockUser: async (id: string) =>
    request<Response<boolean>>({
      url: "/api/Auth/unlockUser",
      method: "Post",
      params: { id },
    }),
  deleteUser: async (id: string) =>
    request<Response<boolean>>({
      url: "/api/Auth/delete",
      method: "DELETE",
      data:  id ,
    }),
  decentralization: async (id: string, type: string) =>
    request<Response<boolean>>({
      url: "/api/Auth/decentralization",
      method: "Post",
      params: { id, type },
    }),
  getAllUser: async (param: paramProduct) =>
    request<IResponePagination<IUser[]>>({
      url: "/api/Auth/getAllUser",
      method: "GET",
      params: param,
    }),
  register: async (data: RegisterParams) =>
    request<any>({
      url: "/api/Auth/register",
      method: "POST",
      data,
    }),
};

export default authApi;
