import React from "react";

// components
import { Navbar, Container, Links, Header, Footer } from "../components";

import GlobalStyle, {
  TextContainer,
  ImageContainer,
  Title,
  Subtitle,
  TextBody,
} from "../globalStyles";

// other
import { aboutContainer } from "../components/data/container";
import craftImage from "../assets/craft.webp";

const About = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="About Us" />
      <Container {...aboutContainer}>
        <ImageContainer image={craftImage}></ImageContainer>
        <TextContainer>
          <Title>Who We Are</Title>
          <Subtitle>Handmade with care</Subtitle>
          <TextBody>
            Bird Brain Gifts is an online store selling gifts for all occasions.
            Offering first-rate handmade products and exceptional customer
            service to shoppers from the comfort of their own homes. We started
            during the 2020 lockdown, having recently lost my job and with
            Christmas looming around the corner I decided to cut the costs and
            go DIY lovingly and sometimes painstakingly making at least one part
            of every gift myself. As I was doing this I found my love for crafts
            and creating items grow and blossom into the store you see today!
            Our online store has since become a great place to buy quality gifts
            that fit any budget. Check it out today and make a little
            independent business jump for joy!
          </TextBody>
        </TextContainer>
      </Container>
    </div>
  );
};

export default About;
