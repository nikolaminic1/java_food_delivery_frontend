import { StatusModel } from "../service/StatusModel";

export interface MyRestaurantRequest {}
export interface MyRestaurantRequestCreation {
  id: number;
  name: string;
  description: string;
  status: StatusModel;
}
