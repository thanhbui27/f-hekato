import { useAppSelector } from "src/hooks/useAppSelector";
import CustomerButton from "../../components/Common/CustomerButton";
import CartTotal from "./components/Cart-Total";
import Table from "./components/tables";
import "./styles.scss";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { useEffect } from "react";
import { deleteALLToCart, getCartByIdU } from "src/store/cart/slice";

const Cart = () => {
  const { isAuth, me } = useAppSelector((state) => state.auth);
  const dispath = useAppDispatch();

  useEffect(() => {
    if (isAuth) dispath(getCartByIdU({ uid: me?.session.sessionId! }));
  }, []);

  const hanleClearCart = async () => {
    const res = await dispath(deleteALLToCart(me?.session.sessionId!))
    if(deleteALLToCart.fulfilled.match(res)){
      dispath(getCartByIdU({ uid: me?.session.sessionId! }));
    }
  }

  const handleUpdateCart = ()=> {
    dispath(getCartByIdU({uid: me?.session.sessionId! }));
  }

  return (
    <div className="cart">
      <div className="slide__bar">
        <div className="container center-bar">
          <h1>Giỏ Hàng</h1>
          <span>Home - Cart </span>
        </div>
      </div>
      <div className="container">
        {isAuth ? (
          <div className="content">
            <div className="content-left">
              <Table  />
              <div className="button-action">
                <CustomerButton onClick={handleUpdateCart} element={<span>Update Cart</span>} />
                <CustomerButton onClick={hanleClearCart} element={<span>Clear</span>} />
              </div>
            </div>
            <div className="content-right">
              <CartTotal />
            </div>
          </div>
        ) : (
          <div className="request-login">
            <p>Vui lòng đăng nhập để tiếp tục</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
