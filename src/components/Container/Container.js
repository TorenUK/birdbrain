import React from "react";

// components
import { ContainerWrapper } from "./Container.elements";

const Container = ({
  children,
  width,
  minHeight,
  background,
  display,
  gtc,
  gtr,
}) => {
  return (
    <ContainerWrapper
      width={width}
      minHeight={minHeight}
      background={background}
      display={display}
      gtc={gtc}
      gtr={gtr}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
