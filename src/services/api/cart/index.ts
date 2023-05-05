import request from "src/services/request";
import { CartResponse, paramsCart, requestGetCart } from "./types";
import { Response } from "src/types/users";
import { RemoveItemParam } from "../auth/types";

const apiCart = {
    addToCart :async (params: paramsCart) => request<Response<boolean>>({
        url : `api/Cart/AddToCart`,
        method : "POST",
        data : params
    }),
    subToCart :async (params: paramsCart) => request<Response<boolean>>({
        url : `api/Cart/SubToCart`,
        method : "POST",
        data : params
    }),
    getCartByUid : async (params : requestGetCart)  => request<Response<CartResponse[]>>({
        url :`api/Cart/GetCartByUId`,
        method : 'GET',
        params
    }),
    removeItemToCart : async (rm : RemoveItemParam) => request<Response<boolean>>({
        url : `api/Cart/DeleteItem`,
        method : 'DELETE',
        data : rm
    }),
    removeAllItem : async (id : number) => request<Response<boolean>>({
        url : `api/Cart/DeleteAll?id=${id}`,
        method : 'DELETE',
    })
}

export default apiCart
