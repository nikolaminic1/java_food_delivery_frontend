export interface RoleModel {
  roleName: string;
}

export interface UserModel {
  id: number;
  username: string;
  email: string;
  authorities: RoleModel[];
  enabled: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
  status: string;
  isAuthenticated: boolean;
}

export interface JWTResponseModel {
  access_token: string;
  refresh_token: string;
  error: string | null;
  status: string;
}
