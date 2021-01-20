import React from "react";

// components
import { Navbar, Links, Header, BlogItem, Footer } from "../components";
import { BasketItem, Container } from "../components";

import GlobalStyle, { PageContainer } from "../globalStyles";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basket/basketSlice";

// other

import { LinksLi } from "../components/Links/Links.elements";

const Order = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Your Order" />
      <Container width="80%">
        PLEASE SCREENSHOT THIS PAGE TO KEEP RECORD OF ORDER DETAILS
      </Container>
      <Container width="80%">
        <h2>EMAIL CONFIRMATION COMING SOON</h2>
      </Container>
      <Container></Container>
      <Footer />
    </>
  );
};

export default Order;
