import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import store, { RootState } from "../../../store";
import {
  createImageService,
  createRestaurantService,
} from "../../../service/restaurants/createImageService";

export const createRestaurant = (data: any) => {
  console.log(data);

  return async () => {
    await store.dispatch(createRestaurantService(data));
  };
};
