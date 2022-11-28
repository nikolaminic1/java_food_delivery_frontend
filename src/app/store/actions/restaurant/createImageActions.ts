import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import store, { RootState } from "../../../store";
import {
  createImageService,
  createRestaurantService,
} from "../../../service/restaurants/createImageService";

export const createImage = (data: any) => {
  return async () => {
    await store.dispatch(createImageService(data));
  };
};
