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
import { Status } from "../../../service/Status";

export const jwtSlice = createSlice({
  name: "jwt",
  initialState: initialJwtState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authorizeUser.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(authorizeUser.fulfilled, (state, action) => {
        state.status = Status.SUCCEED;
      })
      .addCase(authorizeUser.rejected, (state, action) => {
        state.status = Status.REJECTED;
        state.error = action.error.message || null;
      });
  },
});

const reducer = jwtSlice.reducer;
export default reducer;
