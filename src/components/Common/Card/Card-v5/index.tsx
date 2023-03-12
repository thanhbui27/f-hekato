import "./Card.scss"
import { Link } from "react-router-dom"
import image from "../../../../assets/images/image-15.png";

const CardV5 : React.FC = () => {
    return (
        <div className="card__v5">
            <div className="card__v5__content">
                <h3>23% off in all products</h3>
                <Link to={"/"}>Shop Now</Link>
            </div>
            <div className="card__v5__image">
                <img src={image} alt="" />
            </div>
            
        </div>
    )
}

export default CardV5