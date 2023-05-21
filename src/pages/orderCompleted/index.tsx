import { styled } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import CustomerButton from "src/components/Common/CustomerButton";
import CompleteOrder from "src/assets/images/order-succes.png";
import FailuereOrder from "src/assets/images/order-failed.png";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useEffect, useState } from "react";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { deleteALLToCart } from "src/store/cart/slice";

const StyleBox = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center",
  marginTop : "100px",
  position : "relative",
  '.btn' : {
    padding: "15px 20px",
    position: "absolute",
    zIndex: 10,
    bottom: "100px",
    left: "42%",
  }
}));

const OrderCompleted = () => {
  const [Order, setOrder] = useState<boolean>(true)
  const { isAuth,me } = useAppSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useAppDispatch()

  const handleDeleteAllCart = async () => {
    await dispatch(deleteALLToCart(me?.session.sessionId!));
  }

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const isOrder = query.get("success");
    if (isOrder?.toLowerCase() === 'true') {
      handleDeleteAllCart()
      setOrder(true)
    }
    if (isOrder?.toLowerCase() === 'false') {
      setOrder(false)
    }
  },[location])

  return (
    <div className="cart">
      <div className="slide__bar">
        <div className="container center-bar">
          <h1>Đặt hàng thành công</h1>
          <span>Home - Đặt hàng - Đặt hàng thành công </span>
        </div>
      </div>
      <div className="container">
        {isAuth ? (
          <StyleBox>
            <img src={Order ? CompleteOrder : FailuereOrder} />
            <Link to={`/`}>
              <CustomerButton element={<span>Continue Shopping</span>} />
            </Link>
          </StyleBox>
        ) : (
          <div className="request-login">
            <p>Vui lòng đăng nhập để tiếp tục</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCompleted;
