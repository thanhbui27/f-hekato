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
