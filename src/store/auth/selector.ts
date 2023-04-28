import { RootStateType } from "../configureStore";

export const selectIsAuth : (state : RootStateType) => (any) = (state) => state.auth.isAuth

