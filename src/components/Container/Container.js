import React, { Children } from "react";

// components
import { ContainerWrapper } from "./Container.elements";

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
