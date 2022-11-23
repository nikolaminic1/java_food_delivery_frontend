export interface UserModel {
  userId: number;
  name: string;
  email: string;
}

export interface JWTResponseModel {
  access_token: string;
  refresh_token: string;
}
