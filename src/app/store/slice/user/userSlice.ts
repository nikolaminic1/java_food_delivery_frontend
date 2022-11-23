import {
  JWTResponseModel,
  RoleModel,
  UserModel,
} from "../../../models/UserModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialRoleState: RoleModel = {
  roleName: "",
};

const initialUserState: UserModel = {
  id: 0,
  username: "",
  email: "",
  authorities: [],
  enabled: false,
  accountNonExpired: false,
  credentialsNonExpired: false,
  accountNonLocked: false,
};

const initialJwtState: JWTResponseModel = {
  access_token: "",
  refresh_token: "",
};

const jwtSlice = createSlice({
  name: "jwt",
  initialState: initialJwtState,
  reducers: {
    setJwt(state, action: PayloadAction<JWTResponseModel>) {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;

      localStorage.setItem("access", action.payload.access_token);
      localStorage.setItem("refresh", action.payload.refresh_token);
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    getUser(state, action: PayloadAction<UserModel>) {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.authorities = action.payload.authorities;
      state.enabled = action.payload.enabled;
      state.accountNonExpired = action.payload.accountNonExpired;
      state.credentialsNonExpired = action.payload.credentialsNonExpired;
      state.accountNonLocked = action.payload.accountNonLocked;
    },
  },
});

export { jwtSlice, userSlice };
