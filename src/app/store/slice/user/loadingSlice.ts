import { createSlice } from "@reduxjs/toolkit";
import { authorizeUser } from "../../../service/user/userService";
// import { login } from "../../actions/user/userActions";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    toggleLoading: (state) => !state,
  },
  extraReducers: {
    // [authorizeUser.pending]: () => true,
    // [authorizeUser.fulfilled]: () => false,
    // [authorizeUser.rejected]: () => false,
  },
});

export const { toggleLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
