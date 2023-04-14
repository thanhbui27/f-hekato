import { ICart } from "../../types";
import { TableBody } from "./TableBody";
import "./styles.scss";
interface PropsTable {
  data: ICart[];
}

const Table: React.FC<PropsTable> = ({ data }) => {
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
        {data.map((item) => (
          <TableBody item={item} />
        ))}
      </div>
    </div>
  );
};

export default Table;
