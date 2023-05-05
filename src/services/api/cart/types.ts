import { ProductV2 } from "src/services/api/product/types";

export interface paramsCart {
  sessionId: number;
  productId: number;
  quantity: number;
}
export interface CartResponse {
  id: number;
  sessionId: number;
  productGetAll: ProductV2;
  quantity: number;
}
export interface requestGetCart {
  uid : number
}
