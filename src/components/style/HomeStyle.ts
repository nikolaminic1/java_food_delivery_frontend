import styled from "styled-components";

export const MainGradientOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-image: linear-gradient(
    66deg,
    #181818 0%,
    #404040 46%,
    #707070 100%
  );
`;

export const MainLandingDiv = styled.div`
  width: 100%;
  height: 100vh;
  opacity: 0.8;
  position: relative;
`;

export const MainPhotoDiv = styled.div`
  position: absolute;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 100%);
  right: 0;
  width: 40%;
  height: 100%;
  z-index: 100;
`;
