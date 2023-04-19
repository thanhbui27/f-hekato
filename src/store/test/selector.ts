import { RootStateType } from "../configureStore";


export const selectTest : (state : RootStateType) => (any) = (state) => state.test 
