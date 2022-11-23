import React, { FC, ReactElement } from "react";
import { useDispatch } from "react-redux";

interface RestaurantsProps {}

const Restaurants: FC<RestaurantsProps> = ({}): ReactElement => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Restaurants</p>
    </div>
  );
};

export default Restaurants;
