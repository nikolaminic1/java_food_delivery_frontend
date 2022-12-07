import styled from "styled-components";
import { Button, Col, Divider, Row } from "antd";

export const MainRestaurantsDiv = styled.div``;

export const InnerRestaurantsDiv = styled.div`
  padding: 20px;
`;

export const RestaurantsListDiv = styled(Row)`
  color: white;
`;

export const OuterFormDivCreateRestaurant = styled.div`
  padding-top: 100px;
`;

export const InnerFormDivCreateRestaurant = styled.div`
  width: 50%;
  margin-left: 25%;
  background-color: #ffffff42;
  padding: 40px;
  border-radius: 30px;

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

export const FormWrapper = styled.div``;

export const MainMyRestaurantDiv = styled.div`
  padding-top: 60px;
`;

export const OuterMyRestaurantDiv = styled.div`
  padding: 40px;
`;

export const InnerMyRestaurantDiv = styled.div``;

export const CustomUlElement = styled.div``;
export const CustomLiElement = styled.div`
  margin: 14px 0;
`;
export const CustomButtonMyRestaurant = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  text-align: left;
  padding-left: 26px;
  color: #000;
  font-weight: 400;
  font-size: 16px;
  transition: 0.3s all ease;

  &:hover {
    box-shadow: 0 0 5px 5px #9599e2aa;
    transition: 0.3s all ease;
  }
`;

export const CustomDivider = styled.div`
  border-top: 1px solid black;
  margin: 20px 0;
`;

export const CustomBustom = styled(Button)`
  border-radius: 8px;
`;

export const MainOutterDiv = styled.div``;

export const MainInnerDivCategory = styled.div`
  border-radius: 20px;
  background-color: #ffffffaa;
`;

export const MainInnerDivCategoryFlex = styled.div`
  display: flex;
`;

export const ImageDivCategory = styled.div`
  border-radius: 20px 0 0 20px;
  background-color: aliceblue;
  height: inherit;
  width: 130px;
`;
export const ImageObjectCategory = styled.img``;

export const TextHolderCategoryDiv = styled.div`
  padding: 12px;
`;

export const CategoryName = styled.h6``;

export const CategoryDesc = styled.p`
  margin: 0;
`;
export const CategoryTags = styled.div``;

export const CategoryDivider = styled.div`
  border-top: 1px solid black;
  margin: 8px 0;
`;

export const FormItemFlex = styled.div`
  display: flex;
  justify-content: space-between;
  .ant-form-item-control-input-content {
    display: flex;
    justify-content: center;
  }
`;
