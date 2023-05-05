export interface IUser  {
    fullName: string,
    dob: string,
    id: string,
    userName: string,
    session : Session,
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
    cmnd : string
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