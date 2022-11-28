import { createSlice } from "@reduxjs/toolkit";
import { initialRestaurantsState } from "../../../initial_state/restaurant";
import { createRestaurantService } from "../../../service/restaurants/createImageService";
import { Status } from "../../../service/Status";

export const createImageSlice = createSlice({
  name: "createImage",
  initialState: initialRestaurantsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRestaurantService.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(createRestaurantService.fulfilled, (state, action) => {
        state.status = Status.SUCCEED;
        console.log(action.payload);
        // state.restaurants = action.payload.data.business;
      })
      .addCase(createRestaurantService.rejected, (state, action) => {
        state.status = Status.REJECTED;
        state.error = action.error.message || null;
      });
  },
});

const reducer = createImageSlice.reducer;
export default reducer;
