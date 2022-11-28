import React, { FC, ReactElement } from "react";
import { RestaurantModel } from "../app/models/RestaurantModel";
import { InnerRestDiv, RestListItemOuter } from "./style/RestListItem";

interface RestListItemProps {
  data: RestaurantModel;
}

const RestListItem = ({ data }: RestListItemProps) => {
  console.log(data);

  return (
    <RestListItemOuter xs={24} sm={24} md={12} lg={12} xl={12}>
      <InnerRestDiv>
        <h3>{data.name}</h3>
        <h6>{data.status}</h6>
      </InnerRestDiv>
    </RestListItemOuter>
  );
};

export default RestListItem;
