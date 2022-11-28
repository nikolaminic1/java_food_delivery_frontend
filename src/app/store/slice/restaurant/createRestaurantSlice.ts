import { createSlice } from "@reduxjs/toolkit";
import { initialRestaurantsState } from "../../../initial_state/restaurant";
import { createRestaurantService } from "../../../service/restaurants/createRestaurantService";
import { Status } from "../../../service/Status";

export const createRestaurantSlice = createSlice({
  name: "createRestaurant",
  initialState: initialRestaurantsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRestaurantService.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(createRestaurantService.fulfilled, (state, action) => {
        state.status = Status.SUCCEED;
        console.log(action);
        // state.restaurants = action.payload.data.business;
      })
      .addCase(createRestaurantService.rejected, (state, action) => {
        state.status = Status.REJECTED;
        state.error = action.error.message || null;
      });
  },
});

const reducer = createRestaurantSlice.reducer;
export default reducer;
