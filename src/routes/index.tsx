import { useRoutes } from "react-router-dom";
import { routes } from "./routes"
import { useAppSelector } from "src/hooks/useAppSelector";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { useEffect } from "react";
import { getMe } from "src/store/auth/slice";


const Router : React.FC = () => {
    const { isAuth  } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    useEffect(() => {
      if (!isAuth) return;

      dispatch(getMe());

    }, [isAuth]);
    
    const routing = useRoutes(routes());
    return routing
}

export default Router