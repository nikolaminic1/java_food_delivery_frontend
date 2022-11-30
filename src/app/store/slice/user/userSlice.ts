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

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = Status.SUCCEED;
        console.log("user slice");
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = Status.REJECTED;
      });
  },
});

const reducer = userSlice.reducer;
export default reducer;
