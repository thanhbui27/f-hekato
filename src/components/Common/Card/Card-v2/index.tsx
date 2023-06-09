import "./Card.scss";
import Cart from "../../../../assets/icons/cart.svg";
import heart from "../../../../assets/icons/heart.svg";
import search from "../../../../assets/icons/search-plus.svg";
import { product } from "src/services/api/product/types";
import { url } from "src/services/request";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { addToCart } from "src/store/cart/slice";

interface PropsCardV {
  product: product;
}

const CardV2: React.FC<PropsCardV> = ({ product }) => {
  const navigate = useNavigate();
  const { isAuth, me } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const addItemCart = (pid: number, quantity: number) => {
    dispatch(
      addToCart({
        sessionId: me?.session.sessionId!,
        productId: pid,
        quantity: quantity,
      })
    );
  };

  const nav = () => {
    navigate(`/products/${product.productId}`);
  };
  return (
    <div className="card__v2">
      <div className="card__v2__top">
        <img src={`${url}Resources${product.list_image[0].url_image}`} alt="" />
        <div className="card__v2__action">
          <ul>
            {isAuth ? (
              <li onClick={() => addItemCart(product.productId, 1)}>
                <img src={Cart} data-delay="1s" alt="" />
              </li>
            ) : (
              ""
            )}

            <li>
              <img src={heart} data-delay="2s" alt="" />
            </li>
            <li>
              <img src={search} data-delay="3s" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="card__v2__bottom" onClick={nav}>
        <h2>{product.productName}</h2>
        <div className="card__v2__price">
          <span className="price-new">{product.priceNew}</span>
          <span className="price-old">{product.priceOld}</span>
        </div>
      </div>
    </div>
  );
};

export default CardV2;
