import "./Card.scss";
import Cart from "../../../../assets/icons/cart.svg";
import heart from "../../../../assets/icons/heart.svg";
import search from "../../../../assets/icons/search-plus.svg";
import image from "../../../../assets/images/image-2.png";
import CustomerButton from "../../CustomerButton";
import { useNavigate } from "react-router-dom";
import { product } from "src/services/api/product/types";
import { url } from "src/services/request";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { addToCart } from "src/store/cart/slice";

interface PropsCardV1 {
  product: product;
}

const CardV1: React.FC<PropsCardV1> = ({ product }) => {
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
    <div className="card__v1">
      <div className="card__v1__top">
        <img src={`${url}Resources${product.list_image[0].url_image}`} alt="" />
        <div className="card__v1__action">
          <ul>
            {isAuth && (
              <li>
                <img
                  src={Cart}
                  data-delay="1s"
                  alt=""
                  onClick={() => addItemCart(product.productId, 1)}
                />
              </li>
            )}
            <li>
              <img src={heart} data-delay="2s" alt="" />
            </li>
            <li>
              <img src={search} data-delay="3s" alt="" onClick={nav} />
            </li>
          </ul>
        </div>
        <CustomerButton
          element={<span>View Details</span>}
          customerCLass="btn-view"
          onClick={nav}
        />
      </div>

      <div className="card__v1__bottom">
        <h2>{product.productName}</h2>
        <div className="card__v1__color">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="card__v1__code">Code - Y523201</span>
        <span className="card__v1__price">{product.priceNew}</span>
      </div>
    </div>
  );
};

export default CardV1;
