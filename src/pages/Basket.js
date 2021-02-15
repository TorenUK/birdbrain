import React from "react";

// components
import { Navbar, Links, Header, BlogItem, Footer } from "../components";
import { BasketItem, Container } from "../components";

import GlobalStyle, { PageContainer } from "../globalStyles";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basket/basketSlice";

// other
import { Button } from "@material-ui/core";

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
          <BasketItem
            key={idx}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            vals={item.vals}
          />
        ))}
      </Container>
      <Container width="50%">
        {!basket?.length ? <h1>your basket is empty</h1> : null}
      </Container>
      {basket?.length ? (
        <Container>
          <LinksLi to="/checkout">
            <div style={{ textAlign: "center" }}>
              <h2>subtotal: £{total(basket).toFixed(2)}</h2>
              <h2>checkout securely</h2>
              🔒 💳
            </div>
          </LinksLi>
        </Container>
      ) : null}

      <Footer />
    </>
  );
};

export default Basket;
