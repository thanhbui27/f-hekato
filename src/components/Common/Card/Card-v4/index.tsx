import "./Card.scss"
import image from "../../../../assets/images/image-2.png"

const CardV4 : React.FC = () => {
    return (
        <div className="card__v4">
            <div className="card__v4__top">
                <img src={image} alt="" />                                  
         </div>
                
            <div className="card__v4__bottom">
                <h4>Cantilever chair</h4>
                <div className="card__v4__price">
                    <span className="price__new">$42.00</span>
                    <span className="price__old">$24.00</span>
                </div>
            </div>
        </div>
    )
}

export default CardV4