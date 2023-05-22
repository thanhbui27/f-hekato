import { ProductV2 } from "src/services/api/product/types";
import { IUser } from "./users";
export interface OrderDetail {
  id: number;
  orderId: number;
  products: ProductV2;
  quantity: number;
  createAt: string;
}
export interface Payment {
  paymentId: number;
  orderId: number;
  amount: number;
  transactionCode : string,
  provider: string;
  status: string;
  createAt: string;
}
export interface IOrder {
  uid: string;
  orderId: number;
  paymentId: number;
  total: number;
  createAt: string;
  orderDetails: OrderDetail[];
  users: IUser;
  payments: Payment;
}

export enum StatusOrder {
  PENDING = "pending",
  ORDER_CONFIRMED = "order_confirmed",
  FAILED = "failed",
  CANCELED = "canceled",
  DETAIL = "detail",
  CANCELED_PAYMENT = "canceled_payment"
}

export enum StatusPayment {
  NORMAL = "normal",
  MOMO = "momo",
  vnpay = "vnpay"
}

