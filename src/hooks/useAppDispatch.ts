import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store/configureStore";


export const useAppDispatch = () => useDispatch<AppDispatch>();
