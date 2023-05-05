import Input from "../../components/Common/Input";
import "./styles.scss";
import momo from "../../assets/images/momo.png";
import vnpay from "../../assets/images/vnpay.jpg";
import TablePayment from "./components/table";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { getCartByIdU } from "src/store/cart/slice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartTotal from "./components/Cart-Total";
import { IUser } from "src/types/users";
import { SubmitHandler, useForm } from "react-hook-form";
import { alert } from "src/components/Common/Alert";
import { ETypePay } from "./types";

const Payment = () => {
  const [typePay, setTypePay] = useState<ETypePay>(ETypePay.NORMAL)
  const { register, handleSubmit } = useForm<IUser>();
  const { isAuth, me } = useAppSelector((state) => state.auth);
  const dispath = useAppDispatch();
  const nav = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispath(getCartByIdU({ uid: me?.session.sessionId! }));
      return;
    }
    nav("/");
  }, []);
  const selectCart = useAppSelector((state) => state.cart.cart);

  const handleTypePay = (value : ETypePay) => {
    setTypePay(value)
  }

  const onSubmit : SubmitHandler<IUser> = (data: IUser) => {
    console.log({typePay,...data})
    return;
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                  <Input label="Email"  type="email" defaultValue={me?.email}  {...register("email")}/>
                </div>
                <span>Keep me up to date on news and excluive offers</span>
              </div>
              <div className="shipping-address">
                <h4>Thông tin giao hàng</h4>
                <div className="info">
                  <Input label="Full name"   type="text" defaultValue={me?.fullName}  {...register("fullName")}/>
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
                  <Input label="Địa chỉ"  type="text" defaultValue={me?.address} {...register("address")}/>
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
                    <img src={momo} className={`${typePay === ETypePay.MOMO && 'active'}`} alt="" onClick={() => handleTypePay(ETypePay.MOMO)}/>
                    <img src={vnpay} className={`${typePay === ETypePay.VNPAY && 'active'}`}  alt="" onClick={() => handleTypePay(ETypePay.VNPAY)}/>
                    <div className={`normal-payment ${typePay === ETypePay.NORMAL && 'active'} `} onClick={() => handleTypePay(ETypePay.NORMAL)}>
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
    </form>
  );
};

export default Payment;
