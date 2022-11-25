import { JWTResponseModel, RoleModel, UserModel } from "../models/UserModel";

const initialRoleState: RoleModel = {
  roleName: "",
};

const initialUserState: UserModel = {
  id: 0,
  username: "",
  email: "",
  authorities: [],
  enabled: false,
  accountNonExpired: false,
  credentialsNonExpired: false,
  accountNonLocked: false,
  status: "idle",
  isAuthenticated: false,
};

const initialJwtState: JWTResponseModel = {
  access_token: "",
  refresh_token: "",
  error: null,
  status: "idle",
};

export { initialJwtState, initialRoleState, initialUserState };
