import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import queryString from "query-string";
import { StoreType } from "../store/configureStore";

export const url = "https://localhost:7263/"

const baseApiConfig = {
  baseURL: url,
  headers: {
    "content-type": "application/json",
  },
  timeout: 60000, // 60s
  paramsSerializer: (params: Record<string, any>) =>
    queryString.stringify(params),
};

const baseApiClient = axios.create(baseApiConfig);

const request = <T = any>({ ...options }: AxiosRequestConfig<any>) => {
  const onSuccess = (response: AxiosResponse<T, any>) => response;
  const onError = (error: { response: { status: number } }) => {
    return Promise.reject(error.response);
  };

  return baseApiClient(options).then(onSuccess).catch(onError);
};

export const setupInterceptor = (_store: StoreType) => {
  baseApiClient.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    const { accessToken } =  _store.getState().auth; 
      if (config.headers && accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      console.log(accessToken)
      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );
};

export default request;
