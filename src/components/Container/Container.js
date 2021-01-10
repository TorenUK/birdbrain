import React from "react";

// components
import { ContainerTitle, ContainerWrapper } from "./Container.elements";

const Container = ({
  children,
  width,
  height,
  minHeight,
  background,
  display,
  direction,
  gtc,
  gtr,
  title,
}) => {
  return (
    <>
      <ContainerTitle>{title}</ContainerTitle>
      <ContainerWrapper
        width={width}
        height={height}
        minHeight={minHeight}
        background={background}
        display={display}
        direction={direction}
        gtc={gtc}
        gtr={gtr}
      >
        {children}
      </ContainerWrapper>
    </>
  );
};

export default Container;
