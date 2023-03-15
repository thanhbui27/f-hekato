import "./Card.scss"
import Cart from "../../../../assets/icons/cart.svg";
import heart from "../../../../assets/icons/heart.svg";
import search from "../../../../assets/icons/search-plus.svg";
import image from "../../../../assets/images/image-2.png"
import CustomerButton from "../../CustomerButton";
import { useNavigate } from "react-router-dom";

const CardV1: React.FC = () => {
    const navigate = useNavigate();

    const nav = () => {
        navigate(`/products/1`)
    }

    return (
        <div className="card__v1" >
            <div className="card__v1__top">
                <img src={image} alt="" />
                <div className="card__v1__action">
                <ul>
                    <li><img src={Cart} data-delay="1s" alt="" /></li>
                    <li><img src={heart} data-delay="2s" alt="" /></li>
                    <li><img src={search} data-delay="3s" alt="" onClick={nav} /></li>
                </ul>
                             
            </div>
            <CustomerButton  element={<span>View Details</span>} customerCLass="btn-view" onClick={nav}  />
            </div>
          
            <div className="card__v1__bottom">
                <h2>
                    Cantilever chair
                </h2>
                <div className="card__v1__color">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span className="card__v1__code">
                    Code - Y523201
                </span>
                <span className="card__v1__price">
                    $42.00
                </span>
            </div>
        </div>
    )
}

export default CardV1