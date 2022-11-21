import React, { FC, ReactElement } from "react";
import {
  MainGradientOverlay,
  MainLandingDiv,
  MainPhotoDiv,
} from "./style/HomeStyle";

interface LandingHomeProps {}

const LandingHome: FC<LandingHomeProps> = ({}): ReactElement => {
  return <MainLandingDiv></MainLandingDiv>;
};

export default LandingHome;
