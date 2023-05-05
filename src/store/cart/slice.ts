import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { alert } from "src/components/Common/Alert";
import { RemoveItemParam } from "src/services/api/auth/types";
import apiCart from "src/services/api/cart";
import { CartResponse, paramsCart, requestGetCart } from "src/services/api/cart/types";

interface ICart {
    cart : CartResponse[],
    status : string
}

export const getCartByIdU = createAsyncThunk("cart/GETCARTBYUID", async (params : requestGetCart) => {
    try {
        const res = apiCart.getCartByUid(params)
        return res
    }catch(error){
        return Promise.reject(error)
    }
})

export const addToCart = createAsyncThunk("cart/ADD_TO_CART", async (params : paramsCart) => {
    try {
        const res = apiCart.addToCart(params)
        return res
    }catch(error){
        return Promise.reject(error)
    }
})

export const deleteItemToCart = createAsyncThunk("cart/DELETE_TO_CART", async (rm : RemoveItemParam) => {
    try {
        const res = apiCart.removeItemToCart(rm)
        return res
    }catch(error){
        return Promise.reject(error)
    }
})

export const deleteALLToCart = createAsyncThunk("cart/DELETE_ALL_TO_CART", async (id : number) => {
    try {
        const res = apiCart.removeAllItem(id)
        return res
    }catch(error){
        return Promise.reject(error)
    }
})

export const SubOneItem = createAsyncThunk("cart/SUB_ONE_TO_CART", async (params : paramsCart) => {
    try {
        const res = apiCart.subToCart(params)
        return res
    }catch(error){
        return Promise.reject(error)
    }
})



const initialCart : ICart =  {
    status : 'request',
    cart : []
}

const cartReducer = createSlice({
    name : "cart",
    initialState : initialCart,
    reducers : {},
    extraReducers : (builder) =>  {
        builder.addCase(getCartByIdU.pending,(state) => {
            state.status = "pending"
        })

        builder.addCase(getCartByIdU.fulfilled, (state,action) => {
            state.status = "success"
            state.cart = action.payload.data.data
        })

        builder.addCase(getCartByIdU.rejected,(state) => {
            state.status = "rejected"
        })

        builder.addCase(addToCart.pending,(state) => {
            state.status = "pending"
        })

        builder.addCase(addToCart.fulfilled, (state,action) => {
            state.status = "success"
            alert("success", "Thêm sản phẩm thành công")
        })

        builder.addCase(addToCart.rejected,(state) => {
            state.status = "rejected"
        })


        builder.addCase(SubOneItem.pending,(state) => {
            state.status = "pending"
        })

        builder.addCase(SubOneItem.fulfilled, (state,action) => {
            state.status = "success"
        })

        builder.addCase(SubOneItem.rejected,(state) => {
            state.status = "rejected"
        })



        builder.addCase(deleteItemToCart.pending,(state) => {
            state.status = "pending"
        })

        builder.addCase(deleteItemToCart.fulfilled, (state,action) => {
            state.status = "success"
            
            alert("success", "Xoá sản phẩm thành công")
        })

        builder.addCase(deleteItemToCart.rejected,(state) => {
            state.status = "rejected"
        })

        
        builder.addCase(deleteALLToCart.pending,(state) => {
            state.status = "pending"
        })

        builder.addCase(deleteALLToCart.fulfilled, (state,action) => {
            state.status = "success"
            alert("success", "Xoá tất cả sản phẩm thành công")
        })

        builder.addCase(deleteALLToCart.rejected,(state) => {
            state.status = "rejected"
        })
    
    },
})

export default cartReducer.reducer