import request from "src/services/request";
import { IRequestComments } from "./type";
import { Response } from "src/types/users";
import { IComment } from "src/types/comment";

const apiComments = {
    getAllComment : async (id : number) => await request<Response<IComment[]>>({
        url : `api/Comments/getAllComment?productId=${id}`,
        method : 'GET',
    }),
    createComment : async (data : IRequestComments ) => await request<Response<boolean>>({
        url : 'api/Comments/create',
        method : 'POST',
        data : data
    })
}

export default apiComments
