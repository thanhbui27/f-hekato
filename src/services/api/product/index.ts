import request from "src/services/request";
import { paramProduct, product } from "./types";
import { Response } from "src/types/users";
import { IResponePagination } from "src/types/response";

const productApi = {
  apiProductGellAll: async (params: paramProduct) =>
    request<IResponePagination>({
      url: "/api/Product/GetAll",
      method: "GET",
      params,
    }),
  apiProductById: async (id: number) => request<Response<product>>({
    url: `/api/Product/${id}`,
    method: "GET",
  }),
  apiProductFeature: async () =>
    request<Response<product[]>>({
      url: "/api/Product/GetProductFeature",
      method: "GET",
    }),
  apiProductBestSeller: async () =>
    request<Response<product[]>>({
      url: "/api/Product/GetProductBestSeller",
      method: "GET",
    }),
  apiProductNewArrivel: async () =>
    request<Response<product[]>>({
      url: "/api/Product/GetProductNewArrival",
      method: "GET",
    }),
  apiProductSpecialOffer: async () =>
    request<Response<product[]>>({
      url: "/api/Product/GetProductSpecialOffer",
      method: "GET",
    }),
  apiProductTrending: async () =>
    request<Response<product[]>>({
      url: "/api/Product/GetProductTrending",
      method: "GET",
    }),
  apiProductTrendSmall: async () =>
    request<Response<product[]>>({
      url: "/api/Product/GetProductTrendSmall",
      method: "GET",
    }),
};

export default productApi;
