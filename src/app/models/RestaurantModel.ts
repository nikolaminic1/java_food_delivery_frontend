export interface RoleModel {
  roleName: string;
}

export interface RestaurantModel {
  id: number;
  name: string;
}

export interface RestaurantsArrayModel {
  status: string;
  error: string | null;
  restaurants: RestaurantModel[];
}
