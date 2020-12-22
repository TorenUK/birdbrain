import React from "react";

// components
import { Navbar, Banner, Gift, Container, Links } from "../components";
import GlobalStyle from "../globalStyles";

const Shop = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Container>shop</Container>
    </div>
  );
};

export default Shop;
