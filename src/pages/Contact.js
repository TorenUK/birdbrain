import React from "react";

// components

import { Navbar, Links, Header, Footer } from "../components";
import { Container, ContactForm } from "../components";

import GlobalStyle from "../globalStyles";

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
