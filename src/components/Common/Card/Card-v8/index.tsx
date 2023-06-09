import { useNavigate } from 'react-router-dom';
import './styles.scss'
import Cart from "src/assets/icons/cart.svg";
import heart from "src/assets/icons/heart.svg";
import search from "src/assets/icons/search-plus.svg";
import { product } from 'src/services/api/product/types';
import { url } from 'src/services/request';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { addToCart } from 'src/store/cart/slice';
interface PropsCardV {
    product: product;
  }
const CardV8 : React.FC<PropsCardV> = ({product}) => {
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
        <div className="card__v8">
            <div className="card__v8__container">
            <img src={`${url}Resources${product.list_image[0].url_image}`} alt="" />       
                <div className="card__v8__container__content" >
                    <h4 onClick={nav}>{product.productName}</h4>
                    <div className="price">
                        <span className='price-new'>
                            {product.priceNew}
                        </span>
                        <span className="price-old">
                        {product.priceOld}
                        </span>

                    </div>

                    <div className="details">
                        <p>{product.shortDetails}</p>
                    </div>

                    <div className="action">
                        <ul>
                            <li onClick={() => addItemCart(product.productId,1)}><img src={Cart} data-delay="1s" alt="" /></li>
                            <li><img src={heart} data-delay="2s" alt="" /></li>
                            <li><img src={search} data-delay="3s" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardV8
