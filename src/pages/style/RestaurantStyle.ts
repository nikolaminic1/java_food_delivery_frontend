import styled from "styled-components";
import { Col, Divider, Row } from "antd";

export const MainRestaurantsDiv = styled.div``;

export const InnerRestaurantsDiv = styled.div`
  padding: 20px;
`;

export const RestaurantsListDiv = styled(Row)`
  color: white;
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
