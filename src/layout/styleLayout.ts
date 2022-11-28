import { Layout } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const { Header, Content, Sider } = Layout;

export const LayoutDiv = styled(Layout)`
  min-height: 100vh;
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
  color: white;
  padding-top: 60px;
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
`;

export const NavbarLinkItem = styled.li`
  padding: 0 10px;
  color: white;
  display: flex;
  vertical-align: middle;
  align-items: center;
`;

export const NavbarLinkStyled = styled(NavLink)`
  color: #fff;
  font-size: 16px;
`;

export const UnorderListStyled = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export const LogoDiv = styled.div`
  padding-left: 15px;
`;

export const LogoLink = styled(NavLink)`
  font-size: 40px;
  color: white;
`;
