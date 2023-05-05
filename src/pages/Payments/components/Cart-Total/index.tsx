import { useAppSelector } from "src/hooks/useAppSelector";
import CustomerButton from "src/components/Common/CustomerButton";
import "./styles.scss";

const CartTotal = () => {
  const selectCart = useAppSelector((state) => state.cart.cart);
  const getTotal = selectCart.reduce((pre,next) => pre + next.quantity * next.productGetAll.priceNew ,0)

  const handleCheckout = () => {
    console.log("checkout")
  }

  return (
    <div className="cart-total">
      <div className="cart-total-title">
        <h4>Cart Totals</h4>
      </div>
      <div className="cart-total-container">
        <div className="cart-total-content">
          <div className="cart-total-row">
            <h5>Subtotals:</h5> <span>{getTotal} VND</span>
          </div>
          <div className="cart-total-row">
            <h5>Totals:</h5> <span>{getTotal} VND</span>
          </div>
        </div>
        <div className="alert">
            <div className="circle"></div>
            <p>Shipping & taxes calculated at checkout</p>
        </div>
        <CustomerButton
          className="btn-checkout"
          onClick={handleCheckout}
          element={<span>Proceed To Checkout</span>}
        />
      </div>
    </div>
  );
};

export default CartTotal;
