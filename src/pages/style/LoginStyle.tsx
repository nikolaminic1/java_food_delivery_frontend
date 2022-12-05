import styled from "styled-components";

export const MainLoginDiv = styled.div`
  background: hsla(31, 90%, 76%, 1);

  background: linear-gradient(
    -230deg,
    hsla(31, 90%, 76%, 1) 0%,
    hsla(302, 82%, 76%, 1) 100%
  );

  background: -moz-linear-gradient(
    -230deg,
    hsla(31, 90%, 76%, 1) 0%,
    hsla(302, 82%, 76%, 1) 100%
  );

  background: -webkit-linear-gradient(
    -230deg,
    hsla(31, 90%, 76%, 1) 0%,
    hsla(302, 82%, 76%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F9C58D", endColorstr="#F492F0", GradientType=1 );

  min-height: 100vh;
  width: 100%;
  position: relative;
`;

export const MainFormLoginDiv = styled.div`
  position: absolute;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.3);
  padding: 50px;
  width: 30%;
  left: 50%;
  top: 35%;
  transform: translateX(-50%) translateY(-30%);

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
