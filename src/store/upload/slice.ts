import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import apiUpload from "src/services/api/upload"

interface TypeUrlFile {
    url : string,
    status : string
}


export const uploadfile =  createAsyncThunk("UPLOAD/FILE",async ( file : FormData ) => {
    try {
        const res = await apiUpload.uploadImage(file)
        return res
    }catch(error){
        return Promise.reject(error)
    }
  
})

const initialState : TypeUrlFile = {
    url : '',
    status : "request"
}

const uploadReducer = createSlice({
    name : "uploadfile",
    initialState : initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(uploadfile.pending, (state) => {
            state.status = "pending"
        })
        builder.addCase(uploadfile.fulfilled, (state,action) => {
            state.status = "success"
            state.url = action.payload.data
        })
        builder.addCase(uploadfile.rejected, (state) => {
            state.status = "rejected"
        })
    },
})

export default uploadReducer.reducer

