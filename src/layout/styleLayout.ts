import { Layout } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;

export const LayoutDiv = styled(Layout)`
  min-height: 100vh;
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
  color: white;
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

export const LogoDiv = styled.div``;

export const LogoLink = styled(NavLink)`
  font-size: 40px;
  color: white;
`;

export const MainOuterSidebarDiv = styled.div`
  position: fixed;
  width: 100%;
  min-height: calc(100vh - 60px);
  background-color: #ffffff;
  z-index: 1001;
`;
export const MainInnerSidebarDiv = styled.div`
  padding: 50px 30px;
`;
export const LinkWrapper = styled.div``;
export const LinkList = styled.ul`
  list-style-type: none;
`;
export const LinkItemSidebarWrapper = styled.li`
  text-align: left;
  font-size: 22px;
`;
export const LinkItemSidebar = styled(Link)`
  display: flex;
  vertical-align: middle;
  align-content: space-around;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 100%;

  svg {
    display: flex !important;
    height: 100%;
  }
`;

export const LogoMenuHolderWrapper = styled.div`
  height: 60px;
`;
export const LogoMenuHolder = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;
export const LogoMenuItem = styled.div``;

export const SidebarControlMenuItemLogo = styled(Link)`
  font-size: 40px;
  display: flex;
  vertical-align: middle;
  align-content: space-around;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 100%;
  padding-left: 30px;

  svg {
    display: flex !important;
    height: 100%;
  }
`;

export const SidebarControlMenuItemMenu = styled(Link)`
  font-size: 25px;
  display: flex;
  vertical-align: middle;
  align-content: space-around;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 100%;
  padding-right: 30px;

  svg {
    display: flex !important;
    height: 100%;
  }
`;
