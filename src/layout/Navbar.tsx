import React, { FC, ReactElement } from "react";
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

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}): ReactElement => {
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
