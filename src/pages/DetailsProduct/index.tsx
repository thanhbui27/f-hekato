import { useParams } from "react-router-dom";
import IntroSupport from "../Home/components/IntroSub/IntroSub";

import InfoProduct from "./components/InfoProduct";
import MoreInfoProduct from "./components/MoreInfoProduct";

import "./styles.scss";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { useEffect } from "react";
import { getProductById } from "src/store/product/slice";
import { useAppSelector } from "src/hooks/useAppSelector";

const DetailsProduct = () => {
  const dispatch = useAppDispatch();
  const { pid } = useParams();
  const detailProduct = useAppSelector((state) => state.product.productById);  
  useEffect(() => {
    dispatch(getProductById(Number(pid)));
  }, [pid]);

  return (
    <div className="details__product">
      <div className="slide__bar">
        <div className="container center-bar">
          <h1>Chi tiết sản phẩm</h1>
          <span>Home - Products - Detais Product</span>
        </div>
      </div>
      <div className="container">
        {detailProduct && (
          <InfoProduct detailProduct={detailProduct} />
        )}
      </div>
      <MoreInfoProduct />
      <IntroSupport />
    </div>
  );
};

export default DetailsProduct;
