import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiCategory from "src/services/api/category";
import { category } from "src/services/api/category/type";

interface typeCate  {
    status : string,
    cate : category[]
}

export const getAllCategory = createAsyncThunk("category/GET_ALL_CATEGORY", async () => {
    try {
        const res = await apiCategory.getAllCategory()
        return res
    }catch(error){
        return Promise.reject(error)
    }
})

const initialState : typeCate = {
    status : 'request',
    cate : []
}

const cateReducer = createSlice({
    name : 'category',
    initialState : initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(getAllCategory.pending,(state) => {
            state.status = "pending"
        })
        builder.addCase(getAllCategory.fulfilled,(state,action) => {
            state.cate = action.payload.data.data
            state.status = "success"
        })
        builder.addCase(getAllCategory.rejected,(state) => {
            state.status = "rejected"
        })
    },
})

export default cateReducer.reducer
