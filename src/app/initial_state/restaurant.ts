import {
  RestaurantModel,
  RestaurantsArrayModel,
} from "../models/RestaurantModel";
import { JWTResponseModel, RoleModel, UserModel } from "../models/UserModel";

const initialRestaurantState: RestaurantModel = {
  id: 0,
  name: "",
};

const initialRestaurantsState: RestaurantsArrayModel = {
  status: "",
  restaurants: [],
  error: "",
};

export { initialRestaurantState, initialRestaurantsState };
