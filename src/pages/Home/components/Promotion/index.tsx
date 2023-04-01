import CustomerButton from "../../../../components/Common/CustomerButton";
import lamp from "../../../../assets/images/image-12.png";
import "./Promotion.scss";

interface PromotionProps {
    image? : string
}

const Promotion : React.FC<PromotionProps> = ({image}) => {
    return (
        <div className="promotion">
            <div className="promotion__left">
                <img src={lamp} alt="" />
                <div className="promotion__content">
                    <span>Best Furniture For Your Castle Lorem ipsum dolor sit amet</span>
                    <h1>New Furniture Collection Trends in 2020</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <CustomerButton element={<span className="btn-shop">Shop Now</span>} />
                </div>
            </div>
            <div className="promotion__right">
                <div className="promotion__rightImage">
                    <img src={image} alt="" />                          
                </div>     
                <div className="circle"></div>              
                <div className="promotion__rightSale">
                    <h3>50% off</h3>
                </div>
            </div>
        </div>
    )
}

export default Promotion