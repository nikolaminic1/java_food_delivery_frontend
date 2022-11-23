import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { JWTResponseModel, UserModel } from "../../../models/UserModel";
import userService from "../../../service/user/userService";
import { jwtSlice, userSlice } from "../../slice/user/userSlice";
import { toggleLoading } from "../../slice/user/loadingSlice";

export const jwtActions = jwtSlice.actions;
export const userActions = userSlice.actions;
// export const fetchUser = (): ThunkAction<
//   void,
//   RootState,
//   unknown,
//   AnyAction
// > => {
//   return async (dispatch, getState) => {
//     const response: UserModel = await userService.getUser();
//     dispatch(userActions.setUser(response));
//   };
// };

export const login = (
  username: string,
  password: string,
  remember: boolean
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const data = {
      username: username,
      password: password,
      remember: remember,
    };

    try {
      const response: JWTResponseModel = await userService.authorizeUser(data);
      dispatch(jwtActions.setJwt(response));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUser = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response: UserModel = await userService.getUser();
    dispatch(userActions.getUser(response));
  };
};
