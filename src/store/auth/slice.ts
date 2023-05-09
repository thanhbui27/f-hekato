import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../services/api/auth";
import { LoginParams, RegisterParams } from "../../services/api/auth/types";
import { IUser, Role } from "src/types/users";

export type TAuth = {
  me?: IUser;
  status : string
  accessToken?: string;
  isAuth: boolean;
  isAdmin : boolean
};

export const authLogin = createAsyncThunk("auth/Login", async (data : LoginParams) => {
    try {
        const res = await authApi.login(data)
        return res;
    }catch(error){
        return Promise.reject(error)
    }
});

export const getMe = createAsyncThunk("auth/Me", async () => {
  try{
    const res = await authApi.getMe()
    return res
  }catch (error) {
    return Promise.reject(error)
  }
})

export const userRegister = createAsyncThunk("auth/REGISTER", async (data : RegisterParams) => {
  try {
    const res = await authApi.register(data)
    return res
  }catch(error){
    return Promise.reject(error)
  }
})

const initialState: TAuth = {
  status: "request",
  accessToken: "",
  isAuth: false,
  isAdmin : false
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout(state) {
        state.isAuth = false;
        state.isAdmin = false;
        state.accessToken = undefined;
        state.me = {} as IUser;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {
        state.status = "pending";
      });
      builder.addCase(authLogin.fulfilled, (state, action) => {
        state.status = "success";
        state.isAuth = true;
        state.accessToken = action.payload.data.data  
              
      });
      builder.addCase(authLogin.rejected, (state, action) => {
        state.status = "rejected";
      });

      builder.addCase(getMe.pending,(state) => {
        state.status = "pending"
      })

      builder.addCase(getMe.fulfilled, (state,action) => {
        state.status = "success";
        state.me = action.payload.data.data
        if(action.payload.data.data.type === Role.ADMIN){
          state.isAdmin = true;
        }
      })

      builder.addCase(getMe.rejected, (state) => {
        state.status = "rejected";
      })

      builder.addCase(userRegister.pending, (state)=> {
        state.status = "pending"
      })
      builder.addCase(userRegister.fulfilled, (state,action) => {
        state.status = "success"
      })
      builder.addCase(userRegister.rejected, (state) => {
        state.status = "rejected"
      })

  },
});

export const { logout } = authSlice.actions

export default authSlice.reducer;
