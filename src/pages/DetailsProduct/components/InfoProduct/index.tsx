import stars from "src/assets/icons/start.svg";
import fb from "src/assets/icons/fb.svg";
import inst from "src/assets/icons/ins.svg";
import tw from "src/assets/icons/tw.svg";
import CustomerButton from "src/components/Common/CustomerButton";
import "./styles.scss";
import { useAppSelector } from "src/hooks/useAppSelector";
import { url } from "src/services/request";
import { product } from "src/services/api/product/types";
interface PropInfo{
  detailProduct : product
}

const InfoProduct : React.FC<PropInfo> = ({detailProduct}) => {

  return (
    <div className="info__product__box">
      {Object.keys(detailProduct).length !== 0 ? (
        <>
          <div className="info__product__box__image">
            <div className="slide__image">
              {detailProduct.list_image.map((item, index) => (
                <img
                  key={index}
                  src={`${url}Resources${item.url_image}`}
                  alt=""
                />
              ))}
            </div>
            <div className="main__image">
              <img
                src={`${url}Resources${detailProduct.list_image[0].url_image}`}
                alt=""
              />
            </div>
          </div>
          <div className="info__product__box__content">
            <h3>{detailProduct.productName}</h3>
            <div className="stars flex-start">
              <div className="starts__list">
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
              </div>
              <span>(22)</span>
            </div>
            <div className="price flex-start">
              <span className="price__new">{detailProduct.priceNew}</span>
              <div className="price__old">{detailProduct.priceOld}</div>
            </div>
            <div className="info">
              <h5>Details : </h5>
              <p>{detailProduct.shortDetails}</p>
            </div>
            <CustomerButton
              element={<span className="add-cart">Add to Cart</span>}
            />
            <div className="category flex-start">
              <h5>Categories : </h5>
              <div className="list">
                {detailProduct.categories.map((item, index) => (
                  <span key={index}>{item.categoryName}</span>
                ))}
              </div>
            </div>

            <div className="tags flex-start">
              <h5>Tags : </h5>
              <div className="list ">
                <span>Prestashop</span>
                <span>Magento</span>
                <span>Bigcommerce</span>
              </div>
            </div>

            <div className="share flex-start">
              <h5>Share : </h5>
              <div className="share__list">
                <img src={fb} alt="" />
                <img src={inst} alt="" />
                <img src={tw} alt="" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InfoProduct;
