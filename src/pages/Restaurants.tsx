import React, { FC, ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RestaurantModel } from "../app/models/RestaurantModel";
import { getRestaurants } from "../app/store/actions/restaurant/restaurantActions";
import RestaurantListSingleComponent from "./RestListItem";
import {
  InnerRestaurantsDiv,
  MainRestaurantsDiv,
  RestaurantsListDiv,
} from "./style/RestaurantStyle";

interface RestaurantsProps {}

const Restaurants: FC<RestaurantsProps> = ({}): ReactElement => {
  const dispatch = useAppDispatch();
  const restaurants = useAppSelector((state) => state.restaurants.restaurants);

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <MainRestaurantsDiv>
      <InnerRestaurantsDiv>
        <h1>Restaurants</h1>
        <RestaurantsListDiv>
          {restaurants.map((restaurant, i) => {
            return <RestaurantListSingleComponent data={restaurant} key={i} />;
          })}
        </RestaurantsListDiv>
      </InnerRestaurantsDiv>
    </MainRestaurantsDiv>
  );
};

export default Restaurants;
