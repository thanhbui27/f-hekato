import { ProductV2, product } from "src/services/api/product/types";

export interface IResponse {
  success: boolean,
  data: IResponseImage
}

export interface IResponseImage {
  files: string[];
  baseurl: string;
  message: string;
  error: string;
  path: string;
}

export interface IResponePagination<T> {
    items: T,
    pageIndex: number,
    pageSize: number,
    totalRecords: number,
    pageCount: number
}

