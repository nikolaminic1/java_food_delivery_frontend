import React, { FC, ReactElement } from "react";
import { OuterMyRestaurantDiv } from "./style/RestaurantStyle";

interface AboutMyRestaurantProps {}

const AboutMyRestaurant: FC<AboutMyRestaurantProps> = ({}): ReactElement => {
  console.log("about");

  return <OuterMyRestaurantDiv>AboutMyRestaurant</OuterMyRestaurantDiv>;
};

export default AboutMyRestaurant;
