import { useNavigate } from "react-router-dom";
import "./Card.scss";
import { product } from "src/services/api/product/types";
import { url } from "src/services/request";
interface PropsCardV {
  product: product;
}
const CardV6: React.FC<PropsCardV> = ({ product }) => {
  const navigate = useNavigate();  

  const nav = () => {
    navigate(`/products/${product.productId}`);
  };
  return (
    <div className="card__v6" onClick={nav}>
      <div className="card__v6__image">
        <img src={`${url}Resources${product.list_image[0].url_image}`} alt="" />
      </div>

      <div className="card__v6__content">
        <h5>{product.productName}</h5>
        <span>{product.priceOld}</span>
      </div>
    </div>
  );
};

export default CardV6;
