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

export const jwtSlice = createSlice({
  name: "jwt",
  initialState: initialJwtState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authorizeUser.pending, (state, action) => {
        console.log("jwt slice pending");
        state.status = "loading";
      })
      .addCase(authorizeUser.fulfilled, (state, action) => {
        state.status = "succeed";
        console.log("jwt slice fulfilled");
      })
      .addCase(authorizeUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

const reducer = jwtSlice.reducer;
export default reducer;
