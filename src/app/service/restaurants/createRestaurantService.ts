import { createAsyncThunk } from "@reduxjs/toolkit";
import { JWTResponseModel, UserModel } from "../../models/UserModel";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authApi, genericApi, loginApi, noAuthApi } from "../Api";
import store from "../../store";
import {
  RestaurantModel,
  RestaurantsArrayModel,
} from "../../models/RestaurantModel";

export const createRestaurantService = createAsyncThunk(
  "",
  async (data: object) => {
    console.log(data);

    try {
      const response = await genericApi().post("/business/owner/save", data);
    } catch (err) {
      console.log(err);
      throw Error;
    }
  }
);
