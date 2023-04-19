import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { testApi } from "../../services/api/test";
type FetchStatusType = "request" | "pending" | "success" | "rejected"

type TTest = {
    test : any
    status : FetchStatusType
    auth : any
}

export const getApiTest = createAsyncThunk(
    "test/GET_TEST",
    async () => {
        try {
            const res = await testApi()
            return res
        }catch(error){
            return Promise.reject(error)
        }

    }
)

const initialState : TTest = {
    test : [],
    status : "request",
    auth : ""
}

const test = createSlice({
    name: 'test',
    initialState: initialState,
    reducers: {
        auth : () => {
            console.log("something")
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getApiTest.pending, (state) => {
            state.status = "pending";
          });
          builder.addCase(getApiTest.fulfilled, (state, action) => {
            state.status = "success";
            state.test = action.payload        
          });
          builder.addCase(getApiTest.rejected, (state, action) => {
            state.status = "rejected";
          });
      
    }
  })

  export default test.reducer;
