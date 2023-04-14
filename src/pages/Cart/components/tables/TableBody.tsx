import { useState } from "react";
import { ICart } from "../../types";
import remove from "../../../../assets/icons/Group 43.svg";

interface PropsTableBody {
    item : ICart
}

export const TableBody : React.FC<PropsTableBody> = ({item}) => {
    const [count, setCount] = useState(item.quantity);

    const incrementCount = () => {
      setCount(count + 1);
    };
  
    const reduceCount = () => {
      setCount((prev) => (prev === 0 ? 0 : prev - 1));
    };
  return (
    <div className="table-cart-row">
      <div className="table-cart-col">
        <div className="product-info">
          <div className="product-info-image">
            <img src={item.image} alt="" />
            <img src={remove} className="remove" />
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
      <div className="table-cart-col">
        <div className="price">
          <h5>{item.price}</h5>
        </div>
      </div>
      <div className="table-cart-col">
        <div className="action">
          <button onClick={reduceCount}>-</button>
          <h5> {count}</h5>
          <button onClick={incrementCount}>+</button>
        </div>
      </div>
      <div className="table-cart-col">
        <div className="price">
          <h5>{item.total}</h5>
        </div>
      </div>
    </div>
  );
};
