import { JWTResponseModel, UserModel } from "../../../models/UserModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: UserModel = {
  userId: 0,
  name: "",
  email: "",
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
      state = action.payload;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
  },
});

export default jwtSlice;
