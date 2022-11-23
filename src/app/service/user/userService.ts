import { UserModel } from "../../models/UserModel";
import { authApi, loginApi, noAuthApi } from "../Api";

export default {
  async getUser() {
    var response = await authApi().get("api/auth/me");
    console.log(response);
    return response.data;
  },

  async authorizeUser(data: object) {
    var response = await loginApi().post("", data);
    return response.data;
  },
};
