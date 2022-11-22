import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Action } from "../actions";
import { LoginPayload } from "../payload/auth";
import { LoginType } from "../types/login_types";

interface LoginState {
  access: String | null;
  refresh: String | null;
  isAuthenticated: Boolean;
  isLoading: Boolean;
  error: Object;
}

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: false,
  isLoading: false,
  error: {},
};

const reducer = (state: LoginState = initialState, action: Action) => {
  switch (action.type) {
    case LoginType.LOGIN_LOADING:
      return {
        ...state,
      };
    case LoginType.LOGIN_SUCCESS:
      return {
        ...state,
      };

    case LoginType.LOGIN_FAIL:
      return {
        ...state,
      };
  }
};
