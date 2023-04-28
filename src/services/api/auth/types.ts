export interface LoginParams {
    userName : string,
    password : string
}

export interface RegisterParams {
    fullName: string,
    userName: string,
    phoneNumber: string,
    email: string,
    password: string
}

export type Response<T> = {
    isSuccessed : boolean,
    message : string
    data : T;
};

