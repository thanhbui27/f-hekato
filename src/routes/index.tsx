import { useRoutes } from "react-router-dom";
import { routes } from "./routes"

const Router : React.FC = () => {
    const routing = useRoutes(routes());
    return routing
}

export default Router