import Input from "../../components/Common/Input";
import "./styles.scss";
import momo from "../../assets/images/momo.png";
import vnpay from "../../assets/images/vnpay.jpg";
import CartTotal from "../Cart/components/Cart-Total";
import { data } from "../Cart/constants";
import TablePayment from "./components/table";

const Payment = () => {
  return (
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
              <Input label="Email hoặc số điện thoại" />
              <span>Keep me up to date on news and excluive offers</span>
            </div>
            <div className="shipping-address">
              <h4>Địa chỉ giao hàng</h4>
              <div className="info">
                <Input label="First name" />
                <Input label="Last name" />
              </div>
              <div className="info">
                <Input label="Địa chỉ" />
              </div>
              <div className="info">
                <Input label="CMND (Không bắt buộc)" />
              </div>
              <div className="method_payment">
                <h5>Phương thức thanh toán</h5>
                <div className="list-payment">
                  <img src={momo} alt=""/>
                  <img src={vnpay} alt=""/>
                  <div className="normal-payment">Thanh toán khi nhận hàng</div>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-container__cart">
            <div className="table-TablePayment-body">
              {data.map((item) => (
                <TablePayment item={item} />
              ))}
            </div>

            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
