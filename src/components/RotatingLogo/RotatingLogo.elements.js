import styled from "styled-components";

import image from "../../assets/birdbrain-logo.jpg";

export const LogoDiv = styled.div`
  width: 150px;
  height: 150px;
  max-width: 200px;
  max-height: 200px;

  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-image: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 850px) {
    width: 100px;
    height: 100px;
  }
`;
