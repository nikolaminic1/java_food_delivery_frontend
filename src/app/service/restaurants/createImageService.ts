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
    console.log(response);

    return response.data;
  } catch (err) {
    console.log(err);
    throw Error;
  }
});
