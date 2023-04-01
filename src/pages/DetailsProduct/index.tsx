import { useParams } from "react-router-dom";
import IntroSupport from "../Home/components/IntroSub/IntroSub";

import InfoProduct from "./components/InfoProduct";
import MoreInfoProduct from "./components/MoreInfoProduct";

import './styles.scss'


const DetailsProduct = () => {

    const { pid } = useParams();

    return (
        <div className="details__product">
            <div className="slide__bar">
                <div className="container center-bar">
                    <h1>Chi tiết sản phẩm</h1>
                    <span>Home - Products - Detais Product</span>
                </div>
            </div>
            <div className="container">
                <InfoProduct />
            </div>
            <MoreInfoProduct />
            <IntroSupport />
        </div>
    )
}

export default DetailsProduct
