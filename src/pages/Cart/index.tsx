import CustomerButton from "../../components/Common/CustomerButton";
import CartTotal from "./components/Cart-Total";
import Table from "./components/tables";
import { data } from "./constants";
import "./styles.scss";

const Cart = () => {
  return (
    <div className="cart">
      <div className="slide__bar">
        <div className="container center-bar">
          <h1>Giỏ Hàng</h1>
          <span>Home - Cart </span>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="content-left">
            <Table data={data} />
            <div className="button-action">
              <CustomerButton element={<span>Update Cart</span>} />
              <CustomerButton element={<span>Clear</span>} />
            </div>
          </div>
          <div className="content-right">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
