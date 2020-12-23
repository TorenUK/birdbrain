import React from "react";

// components
import { HeaderContainer, HeaderTitle } from "./Header.elements";

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
