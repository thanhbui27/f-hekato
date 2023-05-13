export interface IParamUserOrder {
  id: string;
  fullName: string;
  address: string;
  cmnd: string;
  phoneNumber: string;
  email: string;
}

export interface IParamProductOrder {
  productId: number;
  quantity: number;
}

export interface RequestParamOrder {
  users: IParamUserOrder;
  productIds: IParamProductOrder[];
  typePay: string;
  total: number;
}
