import './styles.scss'
import image from '../../../../assets/images/image-1.png'
import Cart from "../../../../assets/icons/cart.svg";
import heart from "../../../../assets/icons/heart.svg";
import search from "../../../../assets/icons/search-plus.svg";

const CardV8 = () => {
    return (
        <div className="card__v8">
            <div className="card__v8__container">
                <img src={image} alt="" />
                <div className="card__v8__container__content">
                    <h4>Dictum morbi</h4>
                    <div className="price">
                        <span className='price-new'>
                            $26.00
                        </span>
                        <span className="price-old">
                            $52.00
                        </span>

                    </div>

                    <div className="details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    </div>

                    <div className="action">
                        <ul>
                            <li><img src={Cart} data-delay="1s" alt="" /></li>
                            <li><img src={heart} data-delay="2s" alt="" /></li>
                            <li><img src={search} data-delay="3s" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardV8
