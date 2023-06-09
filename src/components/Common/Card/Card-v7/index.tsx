import { url } from 'src/services/request';
import './card.scss'
import { product } from 'src/services/api/product/types';
import { useNavigate } from 'react-router-dom';

interface PropsCardV {
    product: product;
  }

const CardV7 : React.FC<PropsCardV> = ({product}) => {
    const navigate = useNavigate();  

    const nav = () => {
      navigate(`/products/${product.productId}`);
    };
    return (
        <div className="card__v7" onClick={nav}>
            <div className="card__v7__image">
            <img src={`${url}Resources${product.list_image[0].url_image}`} alt="" />          
            </div>   
            <div className="circle"></div>
            <h3>{product.productName}</h3>
            <span>{product.priceNew}</span>
        </div>
    )
}

export default CardV7