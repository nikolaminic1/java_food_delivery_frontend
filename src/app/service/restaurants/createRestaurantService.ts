import { createAsyncThunk } from "@reduxjs/toolkit";
import { JWTResponseModel, UserModel } from "../../models/UserModel";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authApi, genericApi, loginApi, noAuthApi } from "../Api";
import store from "../../store";
import {
  RestaurantModel,
  RestaurantsArrayModel,
} from "../../models/RestaurantModel";
import { ResponseModel } from "../../models/Request";

export const createRestaurantService = createAsyncThunk(
  "",
  async (data: object) => {
    console.log(data);

    try {
      const response = await genericApi().post("/business/owner/save", data);
      console.log(response.data);

      return (await response.data) as ResponseModel;
    } catch (err) {
      console.log(err);
      throw Error;
    }
  }
);

export const updateRestaurantService = createAsyncThunk("", async () => {});
