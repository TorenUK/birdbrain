import React from "react";

// components
import { Navbar, Container, Links, Header, Footer } from "../components";
import GlobalStyle from "../globalStyles";

// other
import { shopContainer } from "../components/data/container";

const Shop = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Shop" />
      <Container {...shopContainer}></Container>
      <Footer />
    </div>
  );
};

export default Shop;
