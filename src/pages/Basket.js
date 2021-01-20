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

const total = (basket) => {
  return basket.reduce((amount, item) => parseFloat(item.price) + amount, 0);
};

const Basket = () => {
  const basket = useSelector(selectBasket);
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Your Basket" />
      <Container width="50%">
        {basket?.map((item, idx) => (
          <BasketItem key={idx} id={item.id} image={item.image} />
        ))}
      </Container>
      <Container>
        <LinksLi to="/checkout">subtotal: £{total(basket)} 💳 </LinksLi>
      </Container>
      <Footer />
    </>
  );
};

export default Basket;
