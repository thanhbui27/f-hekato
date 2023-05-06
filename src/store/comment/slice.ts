import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiComments from "src/services/api/comment";
import { IRequestComments } from "src/services/api/comment/type";
import { IComment } from "src/types/comment";

interface TypeComment {
    comment : IComment[],
    status : string
}

export const getAllComment = createAsyncThunk("comment/GELL_ALL_COMMENT" , async (id : number) => {
    try {
        const res = await apiComments.getAllComment(id)
        return res
    }catch(error){
        return Promise.reject(error)
    }
})

export const createComment = createAsyncThunk("comment/CREATE_COMMENT" , async (data : IRequestComments) => {
    try {
        const res = await apiComments.createComment(data)
        return res
    }catch(error){
        return Promise.reject(error)
    }
})

const initialState : TypeComment = {
    comment : [],
    status : 'request'
}

const commentReducer = createSlice({
    name : "commnet",
    initialState : initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(createComment.pending, state => {
            state.status = 'pending'
        })
        builder.addCase(createComment.fulfilled, (state,action) => {
            state.status = "success"
        })
        builder.addCase(createComment.rejected, state => {
            state.status = "rejected"
        })


        builder.addCase(getAllComment.pending, state => {
            state.status = 'pending'
        })
        builder.addCase(getAllComment.fulfilled, (state,action) => {
            state.status = "success"
            state.comment = action.payload.data.data
        })
        builder.addCase(getAllComment.rejected, state => {
            state.status = "rejected"
        })
    }
})

export default commentReducer.reducer
