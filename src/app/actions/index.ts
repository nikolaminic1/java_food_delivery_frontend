import { LoginType } from "../types/login_types";

interface LOGIN_LOADING {
  type: LoginType.LOGIN_LOADING;
}
interface LOGIN_SUCCESS {
  type: LoginType.LOGIN_SUCCESS;
}
interface LOGIN_FAIL {
  type: LoginType.LOGIN_FAIL;
}

export type Action = LOGIN_LOADING | LOGIN_FAIL | LOGIN_SUCCESS;
