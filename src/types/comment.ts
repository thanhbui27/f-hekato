import { IUser } from "./users";

export interface IComment {
    rate: number,
    description: string,
    productId: number,
    user : IUser,
    CommentId : number,
    createAt : string
}