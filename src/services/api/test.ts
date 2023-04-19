import request from "../request";

export const testApi = () => {
  return request<any>({
    url: "api/cateProduct",
    method: "get",
  });
};
