import { ICart } from "../../../Cart/types";
import './styles.scss'

interface Props {
    item : ICart
}

export const TablePayment : React.FC<Props> = ({item}) => {

  return (
    <div className="table-TablePayment-row">
      <div className="table-TablePayment-col">
        <div className="product-info">
          <div className="product-info-image">
            <img src={item.image} alt="" />
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
          <h5>{item.total}</h5>
        </div>
      </div>
    </div>
  );
};

export default TablePayment
