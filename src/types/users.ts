export interface IUser  {
    fullName: string,
    dob: string,
    id: string,
    userName: string,
    session : Session,
    orders: string | null,
    commentsProducts:  string | null,
    normalizedUserName: string,
    email: string,
    normalizedEmail: string,
    emailConfirmed: boolean,
    passwordHash: string,
    securityStamp: string,
    concurrencyStamp: string,
    phoneNumber: string | null,
    phoneNumberConfirmed: boolean,
    twoFactorEnabled: boolean,
    lockoutEnd: string | null,
    lockoutEnabled: boolean,
    accessFailedCount: number,
    address : string,
    cmnd : string,
    type : Role,
    picture : string
}

export enum Role {
    ADMIN = "admin",
    USER = "user"
}

export enum errorResponeUser {
    ERROR_PLEASE_TRY_AGAIN = "error_please_try_a_gain",
    ACCOUNT_IS_LOCK = "account_is_lock",
    INFO_NOT_EXITS = "info_not_exits",
    CREATE_ACCOUNT_FAILED = "create_account_failed"
}


export interface Session {
    sessionId: number,
     uid: string,
}

export type Response<T> = {
    isSuccessed : boolean,
    message : string
    data : T;
};