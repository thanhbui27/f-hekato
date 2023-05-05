import { CartResponse } from "src/services/api/cart/types";
import { ICart } from "../../../Cart/types";
import './styles.scss'
import { url } from "src/services/request";

interface Props {
    item : CartResponse
}

export const TablePayment : React.FC<Props> = ({item}) => {

  return (
    <div className="table-TablePayment-row">
      <div className="table-TablePayment-col">
        <div className="product-info">
          <div className="product-info-image">
          <img
              src={`${url}Resources${item.productGetAll.image_Url}`}
              alt=""
            />
          </div>
          <div className="product-info-content">
            <h5>Ut diam consequat</h5>
            <div className="category">
              <span>Prestashop</span>
              <span>Magento</span>
              <span>Bigcommerce</span>
            </div>
          </div>
        </div>
      </div>
      <div className="table-TablePayment-col">
        <div className="price">
          <h5>{item.quantity * item.productGetAll.priceNew}</h5>
        </div>
      </div>
    </div>
  );
};

export default TablePayment
