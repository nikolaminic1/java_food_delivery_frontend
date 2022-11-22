import { Action, Dispatch } from "@reduxjs/toolkit";
import { createAction } from "redux-actions";
import axios from "axios";
import { LoginPayload } from "../payload/auth";
import { LoginType } from "../types/login_types";

export const login =
  (email: String, password: String) => async (dispatch: Dispatch<Action>) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      dispatch({
        type: LoginType.LOGIN_LOADING,
      });

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/login/`,
        body,
        config
      );

      dispatch({
        type: LoginType.LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LoginType.LOGIN_FAIL,
      });
    }
  };
