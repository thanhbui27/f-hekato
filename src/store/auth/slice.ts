import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../services/api/auth";
import { LoginParams, RegisterParams } from "../../services/api/auth/types";
import { IUser, Role } from "src/types/users";
import { paramProduct } from "src/services/api/product/types";
import { IResponePagination } from "src/types/response";
import { UserForm } from "src/pages/User/components/MyAccount";

export type TAuth = {
  me?: IUser;
  status: string;
  accessToken?: string;
  allUser: IResponePagination<IUser[]>;
  isAuth: boolean;
  isAdmin: boolean;
};

export const authLogin = createAsyncThunk(
  "auth/Login",
  async (data: LoginParams) => {
    try {
      const res = await authApi.login(data);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const authLoginGoogle = createAsyncThunk(
  "auth/LOGIN_GOOGLE",
  async () => {
    try {
      const res = await authApi.loginGoogle();
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getMe = createAsyncThunk("auth/Me", async () => {
  try {
    const res = await authApi.getMe();
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const userRegister = createAsyncThunk(
  "auth/REGISTER",
  async (data: RegisterParams) => {
    try {
      const res = await authApi.register(data);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getAllUser = createAsyncThunk(
  "auth/GET_ALL_USER",
  async (data: paramProduct) => {
    try {
      const res = await authApi.getAllUser(data);
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const lockUser = createAsyncThunk(
  "auth/LOCK_USER",
  async (params: { id: string; dateTime: string }) => {
    try {
      const res = await authApi.lockUser(params.id, params.dateTime);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const unlockUser = createAsyncThunk(
  "auth/UN_LOCK_USER",
  async (id: string) => {
    try {
      const res = await authApi.unlockUser(id);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const decentralization = createAsyncThunk(
  "auth/DECENTRALIZATION",
  async (params: { id: string; type: string }) => {
    try {
      const res = await authApi.decentralization(params.id, params.type);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "auth/DELETE_USER",
  async (id: string) => {
    try {
      const res = await authApi.deleteUser(id);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);


export const setToken = createAction("auth/setTokened");

export const uploadImage = createAsyncThunk(
  "auth/UPLOAD_IMAGE",
  async (data : {id : string, image : FormData}) => {
    try {
      const res = await authApi.uploadImage(data.id, data.image);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const updateInfoUser = createAsyncThunk(
  "auth/UPDATE_INFO_USER",
  async (user : UserForm) => {
    try {
      const res = await authApi.updateInfoUser(user);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const initialState: TAuth = {
  status: "request",
  accessToken: "",
  isAuth: false,
  isAdmin: false, 
  allUser: {
    items: [],
    pageCount: 0,
    pageIndex: 0,
    totalRecords: 0,
    pageSize: 0,
  },
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
    },
    setTokened :  (state, action) => {
      state.isAuth = true;
      state.accessToken = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.status = "success";
      state.isAuth = true;
      state.accessToken = action.payload.data.data;
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(authLoginGoogle.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(authLoginGoogle.fulfilled, (state, action) => {
      state.status = "success";
      state.isAuth = true;
      state.accessToken = action.payload.data.data;
    });
    builder.addCase(authLoginGoogle.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(updateInfoUser.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(updateInfoUser.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(updateInfoUser.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(uploadImage.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(uploadImage.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(uploadImage.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(getAllUser.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.status = "success";
      state.allUser = action.payload;
      console.log(state.allUser)
    });
    builder.addCase(getAllUser.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(getMe.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(getMe.fulfilled, (state, action) => {
      state.status = "success";
      state.me = action.payload.data.data;
      if (action.payload.data.data.type === Role.ADMIN) {
        state.isAdmin = true;
      }
    });

    builder.addCase(getMe.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(lockUser.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(lockUser.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(lockUser.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(unlockUser.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(unlockUser.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(unlockUser.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(deleteUser.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(decentralization.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(decentralization.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(decentralization.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(userRegister.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(userRegister.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export const { logout, setTokened } = authSlice.actions;

export default authSlice.reducer;
