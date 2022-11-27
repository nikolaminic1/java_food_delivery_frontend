import {
  JWTResponseModel,
  RoleModel,
  UserModel,
} from "../../../models/UserModel";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialJwtState, initialUserState } from "../../../initial_state/user";
import { loginApi } from "../../../service/Api";
import { authorizeUser, getUser } from "../../../service/user/userService";
import store from "../../../store";

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        console.log("userSlice pending");

        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeed";
        console.log("userSlice fullfiled");
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.isAuthenticated = true;
      });
  },
});

const reducer = userSlice.reducer;
export default reducer;
