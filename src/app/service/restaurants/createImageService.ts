import { createAsyncThunk } from "@reduxjs/toolkit";
import { JWTResponseModel, UserModel } from "../../models/UserModel";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authApi, genericApi, loginApi, noAuthApi } from "../Api";
import store from "../../store";
import {
  RestaurantModel,
  RestaurantsArrayModel,
} from "../../models/RestaurantModel";

export const createImageService = createAsyncThunk("", async (data: any) => {
  try {
    const response = await genericApi().post(data, "/images/uploads");
    return response.data;
  } catch (err) {
    console.log(err);
    throw Error;
  }
});

export const createRestaurantService = createAsyncThunk(
  "",
  async (data: any) => {
    try {
      const response = await genericApi().post(data, "/business/create");
      console.log(response.data);

      return response.data;
    } catch (err) {
      console.log(err);
      throw Error;
    }
  }
);
