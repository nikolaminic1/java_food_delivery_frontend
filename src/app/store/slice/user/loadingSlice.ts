import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../actions/user/userActions";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    toggleLoading: (state) => !state,
  },
  //   extraReducers: {
  //     [login.pending]: () => true,
  //     [login.fulfilled]: () => false,
  //     [login.rejected]: () => false,
  //   }
});

export const { toggleLoading } = loadingSlice.actions;
