import React, { FC, ReactElement } from "react";
import LandingHome from "../components/LandingHome";

interface HomeProps {}

const Home: FC<HomeProps> = ({}): ReactElement => {
  return (
    <div>
      <LandingHome />
    </div>
  );
};

export default Home;
