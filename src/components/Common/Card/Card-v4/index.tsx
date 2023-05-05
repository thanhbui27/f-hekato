import { product } from "src/services/api/product/types";
import "./Card.scss"
import { url } from "src/services/request";

interface PropsCardV {
    product: product;
  }

const CardV4 : React.FC<PropsCardV> = ({product}) => {
    return (
        <div className="card__v4">
            <div className="card__v4__top">
            <img src={`${url}Resources${product.list_image[0].url_image}`} alt="" />                         
         </div>
                
            <div className="card__v4__bottom">
                <h4>{product.productName}</h4>
                <div className="card__v4__price">
                    <span className="price__new">{product.priceNew}</span>
                    <span className="price__old">{product.priceOld}</span>
                </div>
            </div>
        </div>
    )
}

export default CardV4