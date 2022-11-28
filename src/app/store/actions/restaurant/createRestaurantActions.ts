import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import store, { RootState } from "../../../store";
import { createRestaurantService } from "../../../service/restaurants/createRestaurantService";

export const createRestaurant = (data: object) => {
  console.log(data);

  return async () => {
    await store.dispatch(createRestaurantService(data));
  };
};
