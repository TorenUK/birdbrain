import React from "react";

// components
import { Navbar, Banner, Gift, Container, Links } from "../components";
import GlobalStyle from "../globalStyles";

const About = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Container>about us</Container>
    </div>
  );
};

export default About;
