import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStateType } from "src/store/configureStore";


export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
