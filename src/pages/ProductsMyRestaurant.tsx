import { Button, Divider } from "antd";
import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import {
  CategoryDesc,
  CategoryDivider,
  CategoryName,
  CategoryTags,
  CustomBustom,
  CustomDivider,
  ImageDivCategory,
  ImageObjectCategory,
  InnerMyRestaurantDiv,
  MainInnerDivCategory,
  MainInnerDivCategoryFlex,
  MainMyRestaurantDiv,
  MainOutterDiv,
  OuterMyRestaurantDiv,
  TextHolderCategoryDiv,
} from "./style/RestaurantStyle";

interface ProductsMyRestaurantProps {}

const ProductsMyRestaurant: FC<
  ProductsMyRestaurantProps
> = ({}): ReactElement => {
  return (
    <MainMyRestaurantDiv>
      <OuterMyRestaurantDiv>
        <InnerMyRestaurantDiv>
          <div>
            <h3>Products</h3>
          </div>
          <CustomDivider />

          <div>
            <h6>Add product categories</h6>
            <CustomBustom type="primary">Add product categories</CustomBustom>
          </div>
          <CustomDivider />
          <div>
            <h6>Add products</h6>
            <CustomBustom type="primary">Add product</CustomBustom>
          </div>
          <CustomDivider />

          <div>
            <h5>List of product categories</h5>
          </div>
          <MainOutterDiv>
            <MainInnerDivCategory>
              <MainInnerDivCategoryFlex>
                <ImageDivCategory>
                  <Link to={""}>
                    <ImageObjectCategory />
                  </Link>
                </ImageDivCategory>
                <TextHolderCategoryDiv>
                  <CategoryName>Name of category</CategoryName>
                  <CategoryDesc>Description of category</CategoryDesc>
                  <CategoryDivider />
                  <CategoryTags>List of tags</CategoryTags>
                </TextHolderCategoryDiv>
              </MainInnerDivCategoryFlex>
            </MainInnerDivCategory>
          </MainOutterDiv>
        </InnerMyRestaurantDiv>
      </OuterMyRestaurantDiv>
    </MainMyRestaurantDiv>
  );
};

export default ProductsMyRestaurant;
