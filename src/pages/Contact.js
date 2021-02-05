import React from "react";

// components

import { Navbar, Links, Header, Footer } from "../components";
import { Container, ContactForm } from "../components";

import GlobalStyle from "../globalStyles";

// other
import { lodash as _ } from "lodash";

const item = {
  name: "milk",
  price: 3,
  qty: 200,
};

const basket = [{ name: "banana", qty: 1 }];

const add = (_basket, item) => {
  if (_basket.length) {
    const regex = new RegExp(item.name);

    return _basket.map((i, idx) => {
      if (regex.test(i.name)) {
        _basket[idx].qty += item.qty;

        return _basket;
      } else {
        return [..._basket, item];
      }
    });
  }
};

console.log(add(basket, item));

const Contact = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Get In Touch" />
      <Container width="80%">
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
