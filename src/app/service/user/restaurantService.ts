import { createAsyncThunk } from "@reduxjs/toolkit";
import { JWTResponseModel, UserModel } from "../../models/UserModel";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authApi, genericApi, loginApi, noAuthApi } from "../Api";
import store from "../../store";
import {
  RestaurantModel,
  RestaurantsArrayModel,
} from "../../models/RestaurantModel";

export const getRestaurantsService = createAsyncThunk("", async () => {
  try {
    return genericApi()
      .get("/business/list")
      .then((response) => {
        console.log(response.data);
      });

    // return response.data.data.business as RestaurantsArrayModel;
  } catch (err) {
    console.log(err);
    throw Error;
  }
});
