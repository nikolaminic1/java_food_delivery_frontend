import { createAsyncThunk } from "@reduxjs/toolkit";
import { JWTResponseModel, UserModel } from "../../models/UserModel";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authApi, loginApi, noAuthApi } from "../Api";
import store from "../../store";

export const authorizeUser = createAsyncThunk("", async (data: object) => {
  try {
    console.log("before login service");
    const response = await loginApi().post("", data);
    console.log("after login service");
    console.log(response);

    const res = (await response.data) as JWTResponseModel;
    return res;
  } catch (err) {
    console.log(err);
    throw Error;
  }
});

export const getUser = createAsyncThunk("", async () => {
  try {
    console.log("before user service");
    const response = await authApi().get("/me");
    console.log("after user service");
    return (await response.data) as UserModel;
  } catch (err) {
    console.log(err);
    throw Error;
  }
});
