import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiOrder from "src/services/api/orders";
import { RequestParamOrder } from "src/services/api/orders/types";
import { paramProduct } from "src/services/api/product/types";
import { IOrder } from "src/types/order";
import { IResponePagination } from "src/types/response";

interface IOrderInit {
  status: string;
  orders: IResponePagination<IOrder[]>;
  orderDetails : IOrder,
  orderByUser : IOrder[]
}

export const createOrder = createAsyncThunk(
  "order/CREATE",
  async (data: RequestParamOrder) => {
    try {
      const res = await apiOrder.createOrder(data);
      return res;
    } catch (error) {
      Promise.reject(error);
    }
  }
);

export const getAllOrder = createAsyncThunk(
  "order/GET_ALL_ORDERS",
  async (data: paramProduct) => {
    try {
      const res = await apiOrder.getAllOrder(data);
      return res.data;
    } catch (error) {
      Promise.reject(error);
    }
  }
);

export const updateStatus = createAsyncThunk("order/UPDATE_STATUS" , async (data : {id : number, status : string}) => {
  try {
    const res = await apiOrder.updateStatus(data.id,data.status);
    return res.data;
  } catch (error) {
    Promise.reject(error);
  }
})

export const deleteOrder = createAsyncThunk("order/DELETE_ORDER" , async (id : number) => {
  try {
    const res = await apiOrder.deleteOrder(id);
    return res.data;
  } catch (error) {
    Promise.reject(error);
  }
})
export const getDetailsOrder = createAsyncThunk("order/DETAILS_ORDER" , async (id : number) => {
  try {
    const res = await apiOrder.orderDetails(id);
    return res.data;
  } catch (error) {
    Promise.reject(error);
  }
})

export const getOrderByUser = createAsyncThunk("order/ORDER_BY_USER", async (id : string) => {
  try {
    const res = await apiOrder.getOrderByUser(id);
    return res.data;
  } catch (error){
    Promise.reject(error)
  }
})

export const PayVnpay = createAsyncThunk("order/PAY_VNPAT", async (data: RequestParamOrder) => {
  try {
    const res = await apiOrder.VnPay(data);
    return res;
  } catch (error) {
    Promise.reject(error);
  }
}
);

const initialState: IOrderInit = {
  status: "request",
  orderDetails : {} as IOrder,
  orderByUser : [],
  orders: {
    items: [],
    pageCount: 0,
    pageIndex: 0,
    totalRecords: 0,
    pageSize: 0,
  },
};

const ordersReducer = createSlice({
  initialState: initialState,
  name: "order",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(createOrder.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(createOrder.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(PayVnpay.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(PayVnpay.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(PayVnpay.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(getDetailsOrder.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(getDetailsOrder.fulfilled, (state,action) => {
      state.status = "success";
      state.orderDetails = action.payload?.data!
    });

    builder.addCase(getDetailsOrder.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(getOrderByUser.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(getOrderByUser.fulfilled, (state,action) => {
      state.status = "success";
      state.orderByUser = action.payload?.data!
    });

    builder.addCase(getOrderByUser.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(getAllOrder.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(getAllOrder.fulfilled, (state, action) => {
      state.status = "success";
      state.orders = action.payload!;
    });

    builder.addCase(getAllOrder.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(updateStatus.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(updateStatus.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(updateStatus.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(deleteOrder.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(deleteOrder.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(deleteOrder.rejected, (state) => {
      state.status = "rejected";
    });

  },
});

export default ordersReducer.reducer;
