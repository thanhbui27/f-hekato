import "./Card.scss";

interface CardV3Props {
    image? : string
}

const CardV3 : React.FC<CardV3Props>  = ({image}) => {
    return (
        <div className="card__v3">
            <img src={image} alt="" />
            <h3>24/7 Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
    )
}

export default CardV3