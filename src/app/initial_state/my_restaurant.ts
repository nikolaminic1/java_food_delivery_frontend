import {
  MyRestaurantRequest,
  MyRestaurantRequestCreation,
} from "../models/MyRestaurant";
import { StatusModel } from "../service/StatusModel";

const initialStateStatus: StatusModel = {
  statusCode: 0,
  statusDesc: "",
};

const initialStateRestaurantRequest: MyRestaurantRequest = {};

const initialStateRestaurantCreation: MyRestaurantRequestCreation = {
  id: 0,
  name: "",
  description: "",
  status: initialStateStatus,
};

export {
  initialStateStatus,
  initialStateRestaurantRequest,
  initialStateRestaurantCreation,
};
