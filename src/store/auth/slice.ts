import { createSlice } from "@reduxjs/toolkit";

export type TAuth = {
    accessToken?: string;
}

const initialState : TAuth = {
    accessToken : ""
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
    },
    
})

export default authSlice.reducer
