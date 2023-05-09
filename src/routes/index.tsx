import { useRoutes } from "react-router-dom";
import { routes } from "./routes"
import { useAppSelector } from "src/hooks/useAppSelector";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { useEffect } from "react";
import { getMe, logout } from "src/store/auth/slice";


const Router : React.FC = () => {
    const { isAuth  } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const GetCurrentUer = async () => {
      const res =  await dispatch(getMe());
      if(!getMe.fulfilled.match(res)){
        await dispatch(logout())
      }
    }
    useEffect(() => {
      if (!isAuth) return;

         GetCurrentUer()

    }, [isAuth]);
    
    const routing = useRoutes(routes());
    return routing
}

export default Router