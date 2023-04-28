import {Outlet, useLocation, useNavigate} from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useAppSelector } from "src/hooks/useAppSelector"
import { useEffect } from "react"

const RootPage : React.FC = () => {
    const {isAuth} = useAppSelector(state => state.auth)
    const location = useLocation();
    const nav = useNavigate()
    useEffect(() => {
        if(location.pathname === "/login" && isAuth){
            nav("/")
        }
    },[location])
    return (
        <div className="wrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
export default RootPage