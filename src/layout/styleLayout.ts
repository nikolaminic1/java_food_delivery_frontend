import { Layout } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const { Header, Content, Sider } = Layout;

export const LayoutDiv = styled(Layout)`
  min-height: 100vh;
  background: #fff;
`;

export const MainNavbarDiv = styled.div`
  position: fixed;
  z-index: 101;
  color: #f0f0f0;
  width: 100%;
  height: 60px;
`;

export const NavbarLinkStyled = styled(NavLink)`
  color: white;
`;

export const NavbarLinkItem = styled.li`
  padding-left: 20px;
  color: white;
`;

export const UnorderListStyled = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export const InnerNavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
