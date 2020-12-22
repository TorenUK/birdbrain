import React from "react";

// components
import { Navbar, Banner, Gift, Container, Links } from "../components";
import GlobalStyle from "../globalStyles";

// other
import { shopContainer } from "../components/data/container";

const Shop = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Container {...shopContainer}>shop</Container>
    </div>
  );
};

export default Shop;
