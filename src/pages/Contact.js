import React from "react";

// components

import { Navbar, Links, Header, Footer } from "../components";
import { Container, ContactForm } from "../components";

import GlobalStyle from "../globalStyles";

// other
import { lodash as _ } from "lodash";

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
