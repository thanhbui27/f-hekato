import CustomerButton from "../../../../components/Common/CustomerButton";
import "./styles.scss";

const CartTotal = () => {
  return (
    <div className="cart-total">
      <div className="cart-total-title">
        <h4>Cart Totals</h4>
      </div>
      <div className="cart-total-container">
        <div className="cart-total-content">
          <div className="cart-total-row">
            <h5>Subtotals:</h5> <span>£219.00</span>
          </div>
          <div className="cart-total-row">
            <h5>Totals:</h5> <span>£219.00</span>
          </div>
        </div>
        <div className="alert">
            <div className="circle"></div>
            <p>Shipping & taxes calculated at checkout</p>
        </div>
        <CustomerButton
          className="btn-checkout"
          element={<span>Proceed To Checkout</span>}
        />
      </div>
    </div>
  );
};

export default CartTotal;
