import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiOrder from "src/services/api/orders";
import { RequestParamOrder } from "src/services/api/orders/types";

interface IOrderInit {
    status : string
}

export const createOrder = createAsyncThunk("order/CREATE", async (data : RequestParamOrder) =>{
    try {
        const res = await apiOrder.createOrder(data)
        return res
    }catch(error){
        Promise.reject(error)
    }
} )

const initialState : IOrderInit = {
    status : "request"
}

const ordersReducer = createSlice({
    initialState : initialState,
    name : "order",
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(createOrder.pending, (state) => {
            state.status = "pending"
        })

        builder.addCase(createOrder.fulfilled, (state) => {
            state.status = "success"
        })

        builder.addCase(createOrder.rejected, (state) => {
            state.status = "rejected"
        })
    }
})

export default ordersReducer.reducer
