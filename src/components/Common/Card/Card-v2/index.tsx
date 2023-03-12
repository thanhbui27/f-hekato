import "./Card.scss"
import Cart from "../../../../assets/icons/cart.svg";
import heart from "../../../../assets/icons/heart.svg";
import search from "../../../../assets/icons/search-plus.svg";


interface CardV2Props {
    image? : string
}

const CardV2: React.FC<CardV2Props> = ({image}) => {
    return (
        <div className="card__v2">
            <div className="card__v2__top">
                <img src={image} alt="" />
                <div className="card__v2__action">
                    <ul>
                        <li><img src={Cart} data-delay="1s" alt="" /></li>
                        <li><img src={heart} data-delay="2s" alt="" /></li>
                        <li><img src={search} data-delay="3s" alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className="card__v2__bottom">
                <h2>
                    Comfort Handy Craft
                </h2>
                <div className="card__v2__price">
                    <span className="price-new">$42.00</span>
                    <span className="price-old">$65.00</span>
                </div>
            </div>
        </div>
    )
}

export default CardV2