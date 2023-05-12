import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import CustomerButton from "src/components/Common/CustomerButton";
import CompleteOrder from "src/assets/images/Group 267.png";
import { useAppSelector } from "src/hooks/useAppSelector";

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
  const { isAuth } = useAppSelector((state) => state.auth);

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
            <img src={CompleteOrder} />
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
