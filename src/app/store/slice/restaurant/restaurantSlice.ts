import {
  JWTResponseModel,
  RoleModel,
  UserModel,
} from "../../../models/UserModel";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialJwtState, initialUserState } from "../../../initial_state/user";
import { loginApi } from "../../../service/Api";
import store from "../../../store";
import { getRestaurantsService } from "../../../service/user/restaurantService";
import { initialRestaurantsState } from "../../../initial_state/restaurant";
import { RestaurantsArrayModel } from "../../../models/RestaurantModel";
import { createRestaurants } from "./createRestaurants";

export const restaurantSlice = createSlice({
  name: "jwt",
  initialState: initialRestaurantsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurantsService.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRestaurantsService.fulfilled, (state, action) => {
        state.status = "succeed";
        console.log(action);
      })
      .addCase(getRestaurantsService.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

const reducer = restaurantSlice.reducer;
export default reducer;