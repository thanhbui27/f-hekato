import request from "src/services/request";
import { RequestParamOrder } from "./types";
import { Response } from "src/types/users";
import { IOrder } from "src/types/order";
import { paramProduct } from "../product/types";
import { IResponePagination } from "src/types/response";

const apiOrder = {
  createOrder: async (data: RequestParamOrder) =>
    await request<Response<boolean>>({
      url: "/api/Orders/Create",
      method: "POST",
      data: data,
    }),
  VnPay: async (data: RequestParamOrder) =>
    await request<Response<string>>({
      url: "/api/Vnpay/payment",
      method: "POST",
      data: data,
    }),
    MoMoPay: async (data: RequestParamOrder) =>
    await request<Response<string>>({
      url: "/api/MoMoPay/payment",
      method: "POST",
      data: data,
    }),
  orderDetails: async (id: number) =>
    await request<Response<IOrder>>({
      url: `/api/Orders/GetDetailsOrder?id=${id}`,
      method: "GET",
    }),
  getAllOrder: async (data: paramProduct) =>
    await request<IResponePagination<IOrder[]>>({
      url: "/api/Orders/GetAllOrder",
      method: "GET",
      params: data,
    }),
  updateStatus: async (id: number, status: string) =>
    await request<Response<boolean>>({
      url: "/api/Orders/UpdateStatus",
      method: "PUT",
      params: {
        id: id,
        status: status,
      },
    }),
  getOrderByUser: async (id: string) =>
    await request<Response<IOrder[]>>({
      url: `/api/Orders/GetOrderById?uid=${id}`,
      method: "GET",
    }),

  deleteOrder: async (id: number) =>
    await request<Response<boolean>>({
      url: `/api/Orders/${id}`,
      method: "DELETE",
    }),
};

export default apiOrder;
