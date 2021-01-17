import React from "react";

// components
import { Navbar, Links, Header, BlogItem, Footer } from "../components";

import GlobalStyle, { PageContainer } from "../globalStyles";

const Basket = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Your Basket" />
      <PageContainer></PageContainer>
      <Footer />
    </>
  );
};

export default Basket;
