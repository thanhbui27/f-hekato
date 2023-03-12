import './card.scss'
import image from "../../../../assets/images/image-14.png";

const CardV7 : React.FC = () => {
    return (
        <div className="card__v7">
            <div className="card__v7__image">
                <img src={image} alt="" />             
            </div>   
            <div className="circle"></div>
            <h3>Mini LCW Chair</h3>
            <span>$56.00</span>
        </div>
    )
}

export default CardV7