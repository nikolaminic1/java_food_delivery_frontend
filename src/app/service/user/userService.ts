import { UserModel } from "../../models/UserModel";
import { loginApi, noAuthApi } from "../Api";

export default {
  async getUser() {
    var response = await noAuthApi().get("user");
    console.log(response);

    return response.data;
  },

  async authorizeUser(data: object) {
    var response = await loginApi().post("", data);
    return response.data;
  },
};
