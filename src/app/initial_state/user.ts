import { JWTResponseModel, RoleModel, UserModel } from "../models/UserModel";
import { Status } from "../service/Status";

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
  status: Status.IDLE,
  isAuthenticated: false,
};

const initialJwtState: JWTResponseModel = {
  access_token: "",
  refresh_token: "",
  error: null,
  status: Status.IDLE,
};

export { initialJwtState, initialRoleState, initialUserState };
