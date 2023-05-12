import request from "src/services/request";
import { RequestParamOrder } from "./types";
import { Response } from "src/types/users";

const apiOrder = {
  createOrder: async (data: RequestParamOrder) =>
    await request<Response<boolean>>({
      url: "/api/Orders/Create",
      method: "POST",
      data: data,
    }),
};

export default apiOrder;
