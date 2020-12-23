import React from "react";

// components
import { Navbar, Banner, Gift, Container, Links } from "../components";
import {
  ImageContainer,
  LargeImage,
  LargeTextContainer,
} from "../globalStyles";
import GlobalStyle from "../globalStyles";

// other
import { aboutContainer } from "../components/data/container";

const About = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Container {...aboutContainer}>
        <ImageContainer>
          <LargeImage src="https://static.wixstatic.com/media/8a7fdb5e5e14471dbd2c447053bb7bcd.jpg/v1/fill/w_699,h_820,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/8a7fdb5e5e14471dbd2c447053bb7bcd.webp" />
        </ImageContainer>
        <LargeTextContainer>
          <h1>About us</h1>
          <h2>hiya</h2>
          <p>hello there this is some dummy text </p>
        </LargeTextContainer>
      </Container>
    </div>
  );
};

export default About;
