import Input from "../../components/Common/Input";
import "./styles.scss";
import momo from "../../assets/images/momo.png";
import vnpay from "../../assets/images/vnpay.jpg";
import TablePayment from "./components/table";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { deleteALLToCart, getCartByIdU } from "src/store/cart/slice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartTotal from "./components/Cart-Total";
import { SubmitHandler, useForm } from "react-hook-form";
import { alert } from "src/components/Common/Alert";
import { ETypePay } from "./types";
import { createOrder } from "src/store/orders/slice";
import { IParamUserOrder } from "src/services/api/orders/types";
import { styled } from "@mui/material";

const StyleError = styled("div")(() => ({
  width : "100%",
  textAlign : "center",
  marginTop : "100px",
  fontSize : "20px",
  color : "red"
}))

const Payment = () => {
  const [typePay, setTypePay] = useState<ETypePay>(ETypePay.NORMAL);
  const { register, handleSubmit } = useForm<IParamUserOrder>();
  const { isAuth, me } = useAppSelector((state) => state.auth);
  const dispath = useAppDispatch();
  const nav = useNavigate();
  useEffect(() => {
    if (isAuth) {
      if(me?.email.includes("default_account") || me?.userName.includes("detault_account")){
        nav("/user");
        alert("error","Email và usename của bạn chưa được cập nhật")
      }
      dispath(getCartByIdU({ uid: me?.session.sessionId! }));
      return;
    }
    nav("/");
  }, []);
  const selectCart = useAppSelector((state) => state.cart.cart);

  const handleTypePay = (value: ETypePay) => {
    setTypePay(value);
  };

  const onSubmit: SubmitHandler<IParamUserOrder> = async (
    data: IParamUserOrder
  ) => {
    const getTotal = selectCart.reduce(
      (pre, next) => pre + next.quantity * next.productGetAll.priceNew,
      0
    );

    const cart = selectCart.map((item) => {
      return {
        productId: item.productGetAll.productId,
        quantity: item.quantity,
      };
    });

    const res = await dispath(
      createOrder({
        users: { ...data, id: me?.id! },
        typePay: typePay,
        productIds: cart,
        total: getTotal,
      })
    );
    if (createOrder.fulfilled.match(res)) {
      nav("/orderCompleted");
      await dispath(deleteALLToCart(me?.session.sessionId!));
      alert("success", res.payload?.data.message!);
    } else {
      alert("error", "có lỗi xảy ra vui lòng thử lại");
    }
    return;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {selectCart.length > 0 ? (
        <div className="payment">
          <div className="slide__bar">
            <div className="container center-bar">
              <h1>Thanh toán</h1>
              <span>Home - Thanh Toán </span>
            </div>
          </div>
          <div className="container">
            <h3>Kiểm tra thông tin</h3>
            <div className="payment-container">
              <div className="payment-container__infomation">
                <div className="contact-infomation">
                  <h4>Thông tin liên hệ</h4>
                  <div className="info">
                    <Input
                      label="Email"
                      type="email"
                      defaultValue={me?.email.includes("default_account") ? "" : me?.email}
                      {...register("email")}
                    />
                  </div>
                  <span>Keep me up to date on news and excluive offers</span>
                </div>
                <div className="shipping-address">
                  <h4>Thông tin giao hàng</h4>
                  <div className="info">
                    <Input
                      label="Full name"
                      type="text"
                      defaultValue={me?.fullName}
                      {...register("fullName")}
                    />
                  </div>
                  <div>
                    <Input
                      label="Số điện thoại"
                      type="text"
                      defaultValue={me?.phoneNumber!}
                      {...register("phoneNumber")}
                    />
                  </div>
                  <div className="info">
                    <Input
                      label="Địa chỉ"
                      type="text"
                      defaultValue={me?.address}
                      {...register("address")}
                    />
                  </div>
                  <div className="info">
                    <Input
                      label="CMND (Không bắt buộc)"
                      defaultValue={me?.cmnd}
                      type="text"
                      {...register("cmnd")}
                      required={false}
                    />
                  </div>
                  <div className="method_payment">
                    <h5>Phương thức thanh toán</h5>
                    <div className="list-payment">
                      <img
                        src={momo}
                        className={`${typePay === ETypePay.MOMO && "active"}`}
                        alt=""
                        onClick={() => handleTypePay(ETypePay.MOMO)}
                      />
                      <img
                        src={vnpay}
                        className={`${typePay === ETypePay.VNPAY && "active"}`}
                        alt=""
                        onClick={() => handleTypePay(ETypePay.VNPAY)}
                      />
                      <div
                        className={`normal-payment ${
                          typePay === ETypePay.NORMAL && "active"
                        } `}
                        onClick={() => handleTypePay(ETypePay.NORMAL)}
                      >
                        Thanh toán khi nhận hàng
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="payment-container__cart">
                <div className="table-TablePayment-body">
                  {selectCart.map((item, index) => (
                    <TablePayment item={item} key={index} />
                  ))}
                </div>
                <CartTotal />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <StyleError>
            <p>Giỏ hàng rỗng vui lòng thử lại</p>
        </StyleError>
       
      )}
    </form>
  );
};

export default Payment;
