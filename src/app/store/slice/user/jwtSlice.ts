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
        console.log(action);
        state.status = Status.SUCCEED;
        state.access_token = action.payload.access_token;
        state.refresh_token = action.payload.refresh_token;
        console.log("jwt slice");
      })
      .addCase(authorizeUser.rejected, (state, action) => {
        state.status = Status.REJECTED;
        state.error = action.error.message || null;
      });
  },
});

const reducer = jwtSlice.reducer;
export default reducer;
