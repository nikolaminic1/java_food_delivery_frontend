import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import {
  CustomButtonMyRestaurant,
  CustomLiElement,
  CustomUlElement,
  InnerMyRestaurantDiv,
  MainMyRestaurantDiv,
  OuterMyRestaurantDiv,
} from "./style/RestaurantStyle";

interface MyRestaurantProps {}

const MyRestaurant: FC<MyRestaurantProps> = ({}): ReactElement => {
  return (
    <MainMyRestaurantDiv>
      <OuterMyRestaurantDiv>
        <InnerMyRestaurantDiv>
          <div>
            <h3>My restaurant name</h3>
          </div>
          <CustomUlElement>
            <CustomLiElement>
              <Link to={"/my_restaurant/about"}>
                <CustomButtonMyRestaurant>About</CustomButtonMyRestaurant>
              </Link>
            </CustomLiElement>
            <CustomLiElement>
              <Link to={"/my_restaurant/products"}>
                <CustomButtonMyRestaurant>Products</CustomButtonMyRestaurant>
              </Link>
            </CustomLiElement>
            <CustomLiElement>
              <Link to={"/my_restaurant/orders"}>
                <CustomButtonMyRestaurant>Orders</CustomButtonMyRestaurant>
              </Link>
            </CustomLiElement>
          </CustomUlElement>
        </InnerMyRestaurantDiv>
      </OuterMyRestaurantDiv>
    </MainMyRestaurantDiv>
  );
};

export default MyRestaurant;
