import "./Card.scss"
import image from "../../../../assets/images/image-14.png";

const CardV6 : React.FC = () => {
    return (
        <div className="card__v6">
            <div className="card__v6__image">
                <img src={image} alt="" />
            </div>
    
            <div className="card__v6__content">
                <h5>Executive Seat chair</h5>
                <span>$32.00</span>
            </div>
        </div>
    )
}

export default CardV6