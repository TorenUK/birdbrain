import React from "react";

// components
import { Navbar, Links, Header, BlogItem, Footer } from "../components";
import { BasketItem } from "../components";

import GlobalStyle, { PageContainer } from "../globalStyles";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basket/basketSlice";

const Basket = () => {
  const basket = useSelector(selectBasket);
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Your Basket" />
      <PageContainer>
        {basket?.map((item) => (
          <BasketItem />
        ))}
      </PageContainer>
      <Footer />
    </>
  );
};

export default Basket;
