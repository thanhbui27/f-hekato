import {Outlet} from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const RootPage : React.FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
export default RootPage