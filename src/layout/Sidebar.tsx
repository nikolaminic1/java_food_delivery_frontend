import React, { Dispatch, FC, ReactElement, SetStateAction } from "react";
import { MdFoodBank } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  LinkItemSidebar,
  LinkItemSidebarWrapper,
  LinkList,
  LinkWrapper,
  LogoMenuHolder,
  LogoMenuHolderWrapper,
  LogoMenuItem,
  MainInnerSidebarDiv,
  MainOuterSidebarDiv,
  SidebarControlMenuItemLogo,
  SidebarControlMenuItemMenu,
} from "./styleLayout";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = (
  sidebarOpen,
  setSidebarOpen
): ReactElement => {
  return (
    <MainOuterSidebarDiv>
      <LogoMenuHolderWrapper>
        <LogoMenuHolder>
          <LogoMenuItem>
            <SidebarControlMenuItemLogo to="/">
              <MdFoodBank />
            </SidebarControlMenuItemLogo>
          </LogoMenuItem>
          <LogoMenuItem>
            <SidebarControlMenuItemMenu
              to="/"
              onClick={() => {
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <GiHamburgerMenu />
            </SidebarControlMenuItemMenu>
          </LogoMenuItem>
        </LogoMenuHolder>
      </LogoMenuHolderWrapper>
      <MainInnerSidebarDiv className="main_inner_sidebar_div">
        <LinkWrapper>
          <LinkList>
            <LinkItemSidebarWrapper>
              <LinkItemSidebar to="/">Item</LinkItemSidebar>
            </LinkItemSidebarWrapper>
          </LinkList>
        </LinkWrapper>
      </MainInnerSidebarDiv>
    </MainOuterSidebarDiv>
  );
};

export default Sidebar;
