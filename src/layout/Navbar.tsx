import React, { Dispatch, FC, ReactElement, SetStateAction } from "react";
import {
  InnerNavbarDiv,
  LogoDiv,
  LogoLink,
  MainNavbarDiv,
  NavbarLinkItem,
  NavbarLinkStyled,
  UnorderListStyled,
} from "./styleLayout";
import { MdFoodBank } from "react-icons/md";

interface NavbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar: FC<NavbarProps> = (sidebarOpen, setSidebarOpen): ReactElement => {
  return (
    <MainNavbarDiv>
      <InnerNavbarDiv>
        <LogoDiv>
          <LogoLink to="/">
            <MdFoodBank />
          </LogoLink>
        </LogoDiv>
        <UnorderListStyled>
          <NavbarLinkItem>
            <NavbarLinkStyled to="/create_restaurant">
              Create restaurant
            </NavbarLinkStyled>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavbarLinkStyled to="/restaurants">Restaurants</NavbarLinkStyled>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavbarLinkStyled to="/restaurants">Shops</NavbarLinkStyled>
          </NavbarLinkItem>
        </UnorderListStyled>
      </InnerNavbarDiv>
    </MainNavbarDiv>
  );
};

export default Navbar;
