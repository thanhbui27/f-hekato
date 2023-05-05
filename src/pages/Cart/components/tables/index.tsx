import { TableBody } from "./TableBody";
import "./styles.scss";
import { useAppSelector } from "src/hooks/useAppSelector";


const Table: React.FC = () => {
  const selectCart = useAppSelector((state) => state.cart.cart);
  
  return (
    <div className="table-cart">
      <div className="table-cart-row">
        <div className="table-cart-col">
          <h4>Product</h4>
        </div>
        <div className="table-cart-col">
          <h4>Price</h4>
        </div>
        <div className="table-cart-col">
          <h4>Quantity</h4>
        </div>
        <div className="table-cart-col">
          <h4>Total</h4>
        </div>
      </div>
      <div className="table-cart-body">
        {selectCart.map((item,index) => (
          <TableBody item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Table;
