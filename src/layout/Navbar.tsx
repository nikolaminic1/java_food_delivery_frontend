import React, { FC, ReactElement } from "react";
import {
  InnerNavbarDiv,
  MainNavbarDiv,
  NavbarLinkItem,
  NavbarLinkStyled,
  UnorderListStyled,
} from "./styleLayout";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}): ReactElement => {
  return (
    <MainNavbarDiv>
      <InnerNavbarDiv>
        <UnorderListStyled>
          <NavbarLinkItem>
            <NavbarLinkStyled to="/restaurants">Restaurants</NavbarLinkStyled>
          </NavbarLinkItem>
        </UnorderListStyled>
      </InnerNavbarDiv>
    </MainNavbarDiv>
  );
};

export default Navbar;
