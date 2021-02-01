import React from "react";

// components

import { Navbar, Links, Header, Footer } from "../components";
import { Container } from "../components";

import GlobalStyle from "../globalStyles";

const Contact = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Get In Touch" />
      <Container width="80%"></Container>
      <Footer />
    </>
  );
};

export default Contact;
