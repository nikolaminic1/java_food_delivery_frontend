import React, { FC, ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RestaurantModel } from "../app/models/RestaurantModel";
import { getRestaurants } from "../app/store/actions/restaurant/restaurantActions";

interface RestaurantsProps {}

const Restaurants: FC<RestaurantsProps> = ({}): ReactElement => {
  const dispatch = useAppDispatch();
  const restaurants = useAppSelector((state) => state.restaurants.restaurants);

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <div>
      <p>Restaurants</p>
      <div>
        {/* {restaurants.map((restaurant, i) => {
          return (
            <div key={i}>
              <h2>{restaurant.name}</h2>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Restaurants;
