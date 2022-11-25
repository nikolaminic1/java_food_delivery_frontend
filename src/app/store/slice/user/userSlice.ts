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
  reducers: {
    setJwt(state, action: PayloadAction<JWTResponseModel>) {
      console.log("jwt slice");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorizeUser.pending, (state, action) => {
        console.log("jwt slice pending");
        state.status = "loading";
      })
      .addCase(authorizeUser.fulfilled, (state, action) => {
        state.status = "succeed";
        console.log("jwt slice fullfiled");
        const loadedJwt = action.payload;
        state.access_token = loadedJwt.access_token;
        state.refresh_token = loadedJwt.refresh_token;

        localStorage.setItem("access", loadedJwt.access_token);
      })
      .addCase(authorizeUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser(state, action: PayloadAction<UserModel>) {
      state.id = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        console.log("userSlice pending");

        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeed";
        console.log("userSlice fullfiled");

        const loadedUser = action.payload;
        state.id = loadedUser.id;
        state.username = loadedUser.username;
        state.isAuthenticated = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.isAuthenticated = true;
      });
  },
});
