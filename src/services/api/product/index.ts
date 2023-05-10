import request from "src/services/request";
import { List_imageV2, list_image, paramProduct, product } from "./types";
import { Response } from "src/types/users";
import { IResponePagination } from "src/types/response";

const productApi = {
  createProduct: async (params: FormData) =>
    await request<Response<boolean>>({
      url: "/api/Product/Create",
      method: "POST",
      data: params,
    }),
  deleteProduct: async (id: number) => await request({
    url: "/api/Product/Delete",
    method: "DELETE",
    data : {
      productId : id
    }
  }),
  UploadImageProduct: async (params: FormData) =>
    await request<Response<list_image[]>>({
      url: `/api/Product/UploadImage`,
      method: "POST",
      data: params,
    }),
  getImageProductById: async (id: number) =>
    await request<Response<List_imageV2[]>>({
      url: `/api/Product/GetImageById?id=${id}`,
      method: "GET",
    }),
  updateProduct: async (params: FormData) =>
    await request<Response<boolean>>({
      url: "/api/Product/Update",
      method: "PUT",
      data: params,
    }),
  apiProductGellAll: async (params: paramProduct) =>
    await request<IResponePagination>({
      url: "/api/Product/GetAll",
      method: "GET",
      params,
    }),
  apiProductById: async (id: number) =>
    await request<Response<product>>({
      url: `/api/Product/${id}`,
      method: "GET",
    }),
  apiProductFeature: async () =>
    await request<Response<product[]>>({
      url: "/api/Product/GetProductFeature",
      method: "GET",
    }),
  apiProductBestSeller: async () =>
    await request<Response<product[]>>({
      url: "/api/Product/GetProductBestSeller",
      method: "GET",
    }),
  apiProductNewArrivel: async () =>
    await request<Response<product[]>>({
      url: "/api/Product/GetProductNewArrival",
      method: "GET",
    }),
  apiProductSpecialOffer: async () =>
    await request<Response<product[]>>({
      url: "/api/Product/GetProductSpecialOffer",
      method: "GET",
    }),
  apiProductTrending: async () =>
    await request<Response<product[]>>({
      url: "/api/Product/GetProductTrending",
      method: "GET",
    }),
  apiProductTrendSmall: async () =>
    await request<Response<product[]>>({
      url: "/api/Product/GetProductTrendSmall",
      method: "GET",
    }),
};

export default productApi;
