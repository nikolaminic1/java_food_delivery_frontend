import { Layout } from "antd";
import styled from "styled-components";

export const LayoutDiv = styled(Layout)`
  background: #fff;
`;

export const MainNavbarDiv = styled.div`
  position: fixed;
  z-index: 101;
  color: #f0f0f0;
  width: 100%;
  height: 60px;
`;

export const InnerNavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;
    li {
      padding-right: 20px;
    }
  }
`;
