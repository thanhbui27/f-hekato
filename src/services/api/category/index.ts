import request from "src/services/request";
import { Response } from "src/types/users";
import { category } from "./type";

const apiCategory = {
    getAllCategory : async () => request<Response<category[]>>({
        url : 'api/Category/GetAllCategory',
        method : "GET"
    })
}

export default apiCategory